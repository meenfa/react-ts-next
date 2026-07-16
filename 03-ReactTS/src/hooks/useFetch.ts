import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

//   Useeffect to make fetch request
useEffect(()=>{
    setState({data:null, loading: true, error:null});

    const controller = new AbortController();

    async function fetchData() {
      try {
        const response = await fetch(url, { signal: controller.signal });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: T = await response.json();
        
        setState({
          data: result,
          loading: false,
          error: null,
        });
      } catch (err: any) {
        // Ignore errors from aborted requests
        if (err.name !== 'AbortError') {
          setState({
            data: null,
            loading: false,
            error: err.message || "Something went wrong",
          });
        }
      }
    }

    fetchData();

    // Cleanup function to cancel request if component unmounts or URL changes
    return () => controller.abort();
  }, [url]);

return state
}

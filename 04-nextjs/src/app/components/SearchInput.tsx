"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // 1. Get the current 'search' value from the URL to keep input in sync
  const initialQuery = searchParams.get("search") || "";
  const [query, setQuery] = useState(initialQuery);

  // 2.update the url when user stops typing(debouncing)
  useEffect(() => {
    const Timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (query) {
        params.set("search", query);
      } else {
        params.delete("search");
      }
      // push the new url without reloading thwe page
      router.push(`/products?${params.toString()}`);
    }, 500);

    // Cleanup: clear the timer if the user types again before 500ms
    return () => clearTimeout(Timer);
  }, [query, router, searchParams]);

  return (
    <div className="mb-6">
       <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-48 p-2 border rounded-lg mb-4"
    />
    </div>
  );
}

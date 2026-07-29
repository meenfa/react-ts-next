"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
// import { cookies } from "next/headers";
import { useEffect, useState } from "react";

interface User {
  email: string;
}

interface ProfileResponse {
  message: string;
  user: User;
}

export default function DashboardPage() {
  const router = useRouter();
  // const cookieStore = await cookies();
  // const email = cookieStore.get("email")?.value;
  const [data, setData] = useState(null);

  useEffect(() => {
    // const token = localStorage.getItem("token");

    // if (!token) {
    //   router.push("/login");
    //   return;
    // }

    // fetch("/api/profile", {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
     fetch("/api/profile").then(async (res) => {
      // redirect if the user is not authed
      if (res.status === 401) {
        router.push("/login");
        return;
      }

      const data = await res.json();
      setData(data);
    });
    // .then((res) => res.json())
    // .then((data) => setData(data));
  }, []);

  async function handleLogout() {
    await fetch("/api/logout", {
      method: "POST",
    });

    router.push("/login");
  }

  return (
    <div>
      <h2>This is Dashboard page</h2>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <ul>
        <li>{data?.user?.email}</li>
      </ul>

      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

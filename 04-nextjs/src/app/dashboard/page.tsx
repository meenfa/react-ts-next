"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
// import { cookies } from "next/headers";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  // const cookieStore = await cookies();
  // const email = cookieStore.get("email")?.value;
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetch("/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <div>
      <h2>This is Dashboard page</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <ul>
        <li>{data?.user?.email}</li>
      </ul>

      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

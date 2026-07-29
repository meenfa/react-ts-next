"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  function handleLogout() {
    localStorage.removeItem("token");
    router.push("/login");
  }
  return (
    <aside className="w-24 min-h-screen border-r">
      <div className="border-b">
        <h2>Dashboard</h2>
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <Link href="/dashboard">overview</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
        <Link href="/dashboard/setting">Setting</Link>
        <p onClick={handleLogout}>Logout</p>
      </div>
    </aside>
  );
}

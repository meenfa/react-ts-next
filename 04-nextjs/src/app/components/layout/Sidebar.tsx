import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-24 min-h-screen border-r">
      <div className="border-b">
        <h2>Dashboard</h2>
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <Link href="/dashboard">overview</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
        <Link href="/dashboard/setting">Setting</Link>
      </div>
    </aside>
  );
}

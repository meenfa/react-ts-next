import Link from "next/link";

export default function Header() {
  return (
    <header className="px-8 py-2 flex justify-between items-center text-black ">
       <div className="text-xl font-bold text-gray-900">
        <Link href="/"><h1>Next JS</h1> </Link>
      </div>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blogs</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/products">Products</Link>
      </div>
    </header>
  );
}

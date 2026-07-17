import { blogs } from "@/lib/blogData";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <h2>All Blogs</h2>
      <div>
        {blogs.map((e) => (
           <Link 
            key={e.id} 
            href={`/blog/${e.slug}`}
            className="p-4"
          >
            <h2 className="text-xl">{e.title}</h2>
            <p className="text-sm">Slug: {e.slug}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

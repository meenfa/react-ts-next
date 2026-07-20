import { blogs } from "@/lib/blogData";
import Link from "next/link";
import type { Metadata } from "next";

// page level -> static metadata
export const metadata:Metadata = {
  title:"Blog",
  description:"This is the description",
  openGraph:{
   title: "Blog | Learn Next.js",  
     description:"This is the description",
     images:["/og-image.avif"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Learn Next.js",  
     description:"This is the description",
    site: "meenfax", 
     images:["/og-image.avif"]
  },


}
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

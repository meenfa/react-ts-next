import { blogs } from "@/lib/blogData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const {slug} = await params;
  const post = blogs.find((blog) => blog.slug === slug);

  if (!post) {
    return {
      title: "post not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      // images: [post.imageUrl],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

// {Page content}
// async func
export default async function BlogPost({ params }: PageProps) {
  // need to use await to unwrap the  params promise to access the dynamic route data
  const { slug } = await params;
  const data = blogs.find((blog) => blog.slug === slug);

  if (!data) {
    notFound();
  }
  return (
    <div>
      <h1>{data.title}</h1>
      <h1>{data.description}</h1>
    </div>
  );
}

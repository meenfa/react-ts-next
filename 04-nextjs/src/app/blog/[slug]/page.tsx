import { blogs } from "@/lib/blogData";
import { notFound } from "next/navigation";

interface PageProps{
    params:{
        slug: string
    }
}

// async func
export default async function BlogPost({params}:PageProps){
    // need to use await to unwrap the  params promise to acces the dynamic route data
    const { slug } = await params;
    const data = blogs.find((blog) => blog.slug ===slug);

    if(!data){
        notFound();
    }
     return(
        <div>
            <h1>{data.title}</h1>
            <h1>{data.description}</h1>
        </div>
     )
}
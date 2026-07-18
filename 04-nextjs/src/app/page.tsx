import Image from "next/image";
import Link from "next/link";
import ServerInfo from "./components/ServerInfo";
import next from "next";

//
interface Album {
  userId: number;
  id: number;
  title: string;
}
export default async function Home() {
  // const data: Album[] =await fetch ('https://jsonplaceholder.typicode.com/albums')
  // .then(response => response.json())

  const response = await fetch("https://jsonplaceholder.typicode.com/albums",{
    // to make data dynamic rendering
    cache:"no-store"
    //or 
    // next:{revalidate: 10}
  });
  const data: Album[] = await response.json();
  return (
    <div className="min-h-screen">
      <div>
        <h2 className="font-black">Server Component</h2>
        <ServerInfo />
        <Link href="/server-client-demo">Go to client Component</Link>

        {data.slice(0,5).map((e: Album) => (
          <h2 key={e.id} className="text-gray-900">
            {e.title}
          </h2>
        ))}
      </div>

      {/* <h2>This is the home page</h2> */}
      <main className="p-4 flex gap-4">
        <Image
          src="/1.jpg"
          alt="hero image"
          width={300}
          height={300}
          priority
        />
        <Image
          src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
          alt="hero image"
          width={300}
          height={300}
          priority
        />
      </main>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import ServerInfo from "./components/ServerClockInfo";
import next from "next";
// import { Product } from '@/types/product';
import ClientProductApiList from "./components/ClientProductApiList";

// interface Album {
//   userId: number;
//   id: number;
//   title: string;
// }

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();
  //   // const data: Album[] =await fetch ('https://jsonplaceholder.typicode.com/albums')
  //   // .then(response => response.json())

  //   const response = await fetch("https://jsonplaceholder.typicode.com/albums",{
  //     // to make data dynamic rendering
  //     cache:"no-store"
  //     //or
  //     // next:{revalidate: 10}
  //   });
  //   const data: Album[] = await response.json();

  return (
    <div className="min-h-screen">
      <div>
        {/* <h2 className="font-black">Posts from GET API</h2>
        {products.map((product:Product)=>(
        <li key={product.id}>{product.name}</li>
       ))} */}
        {/* <h2 className="font-black">Client Component Clock</h2>

        <Link href="/server-client-demo">
          <button className="p-2 text-sm bg-gray-200 border rounded-2xl cursor-pointer">
            Client Server Component Clock demo
          </button>
        </Link>
        {/* {data.slice(0,5).map((e: Album) => (
          <h2 key={e.id} className="text-gray-900">
            {e.title}
          </h2>
        ))} */}
        <div className="mt-2">
          <h2>Client Component API Demo</h2>
          <ClientProductApiList />
        </div>
      </div>

      {/* <h2>This is the home page</h2> */}
      {/* <main className="p-4 flex gap-4">
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
      </main> */}
    </div>
  );
}

import { products } from "@/lib/productsData";
import Link from "next/link";
import SearchInput from "../components/SearchInput";

interface ProductsPageProps {
  searchParams: {
    // search params acts aas async so handles as promise
    category?: string;
    sort?: string;
    search?: string;
  };
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  //  throw new Error("This is a test error to see the error.tsx page!");
  // fake delay to show loading.tsx, itWait for 2 seconds to simulate a slow database/API
   await new Promise((resolve) => setTimeout(resolve, 200));
  // 1.awaits the search params
  const { category, sort, search } = await searchParams;

  // 1. make a fresh copy of the data
  let filtered = [...products];

  if (search) {
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  if (category) {
    filtered = filtered.filter((product) => product.category === category);
  }
  if (sort === "asc") {
    filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
  }
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-black">Product Page</h2>
      <SearchInput />
      <div className="flex gap-2 cursor-pointer">
        <Link href="/products">All Products</Link> |
        <Link href="/products?category=react">React</Link> |
        <Link href="/products?category=next">Next</Link> |
        <Link href="/products?category=angular">Angular</Link> |
        <Link href="/products?sort=asc">Sort</Link>
      </div>
      <p>
        Current filter: <b>{category || "ALL"}</b>
        Sort: <b>{sort || "Default"}</b>
        
      </p>

      {/* product data */}
      <div className="flex flex-col gap-2 pt-4">
        {filtered.length > 0 ? (
          filtered.map((e) => (
            <Link href={`/products/${e.id}`} key={e.id}>
              <div className="p-2 border w-48 rounded-lg">
                <h2 className="text-black cursor-pointer">{e.name}</h2>
              </div>
            </Link>
          ))
        ) : (
          <div>
            <h2>No products available</h2>
          </div>
        )}
      </div>
      {/* {products.map((e) => (
        <h2 className="text-xl">{e.name}</h2>
      ))} */}
    </div>
  );
}
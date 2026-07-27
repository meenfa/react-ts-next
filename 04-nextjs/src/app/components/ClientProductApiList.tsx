"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

type Product = {
  id: number;
  title: string;
  category: string;
};

const ClientProductApiList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [id, setId] = useState<number | "">("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  async function getProducts() {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  }

  async function createProduct() {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
      }),
    });

    setTitle("");
    setCategory("");
    getProducts();
  }
  // Fetch the initial list of products when the page first loads.
  // We use useEffect so this only happens once, preventing an infinite loop
  // that would occur if we called it directly in the component body.
  useEffect(() => {
    getProducts();
  }, []);

  async function patchProduct() {
    const res = await fetch(`/api/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    });
    setId("");
    setTitle("");
    getProducts();
  }
  // make for put

  // for delete
   async function deleteProducts() {
      const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    setId("");
    getProducts();
  }

  
  return (
    <div className="w-full">
      <h3>Client Product API list</h3>

      <div className="space-y-2 mb-4">
        <input
          placeholder="id for PATCH"
          value={id}
          onChange={(e) => setId(e.target.value ? Number(e.target.value) : "")}
          className="border border-zinc-950 p-2 rounded"
        />
        <br />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-zinc-950 p-2 rounded"
        />
        <br />
        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-zinc-950 p-2 rounded"
        />
        <br />
        <div>
          <Button onClick={createProduct}>create product data(post)</Button>
          <Button onClick={patchProduct}>Patch data</Button>
          <Button onClick={getProducts}>Get/Post API</Button>
          <Button onClick={deleteProducts}>Delete Product</Button>
        </div>
      </div>

      <pre>{JSON.stringify(products, null, 2)} </pre>
    </div>
  );
};
export default ClientProductApiList;

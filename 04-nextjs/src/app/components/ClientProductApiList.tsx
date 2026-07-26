"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

type Product = {
  id: number;
  title: string;
  category: string;
};

// ?
const ClientProductApiList = () => {
  const [products, setProducts] = useState<Product[]>([]);
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

  async function createPost() {
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

  return (
    <div>
      <h3>Client Product API list</h3>
      <Button onClick={getProducts}>Get/Post API</Button>
      <div className="space-y-2 mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <br />
        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        />
        <br />
        <div>
          <Button onClick={createPost}>create product data(post)</Button>
        </div>
      </div>

      <pre>{JSON.stringify(products, null, 2)} </pre>
    </div>
  );
};

export default ClientProductApiList;

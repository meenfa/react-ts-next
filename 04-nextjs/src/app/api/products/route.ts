import { NextResponse } from "next/server";

import { products, Product } from "@/lib/productsData";

// default is only for UI, for routes no default
// GET API
export async function GET() {
  return NextResponse.json(products);
}


// POST API
export async function POST(request: Request) {
  const body = await request.json();
 
  const newProduct: Product = {
    id: products.length + 1,
    title: body.title,
    category: body.category,
  };

  products.push(newProduct);

  return NextResponse.json(
    {
      message: "Product Created Successfully",
    //   data: newProduct,
      data:body,
    },
    {
      status: 201,
    },
  );
}

// patch API

export async function PATCH(request: Request) {
    
}

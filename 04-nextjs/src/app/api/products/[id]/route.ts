// dynamic routes based on id for patch and put
import { NextResponse } from "next/server";
import { products } from "@/lib/productsData";

// GET api based on ID
// params promise bata uthcha new version ma.


export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return NextResponse.json(
      { message: " Product not found" },
      { status: 404 },
    );
  }
  return NextResponse.json(product);
}

// PATCH api based on ID, update only specific fields
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await request.json();

  // converting string id to number
  const productId = Number(id);

  // to find the position of the product
  const productIndex = products.findIndex(
    (product) => product.id === productId,
  );

  if (productIndex === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  // update only the fields sent in the request
  if (body.title !== undefined) {
    products[productIndex].title = body.title;
  }
  if (body.category !== undefined) {
    products[productIndex].category = body.category;
  }

  return NextResponse.json(
    {
      message: "Product updated successfully",
      data: products[productIndex],
    },
    {
      status: 200,
    },
  );
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  // converting string id to number
  const productId = Number(id);
  // to find the position of the product
  const productIndex = products.findIndex(
    (product) => product.id === productId,
  );

  if (productIndex === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  // remove product from the array
  const deletedProduct = products.splice(productIndex, 1);

  return NextResponse.json(
    {
      message: "Product deleted successfully",
      data: deletedProduct[0],
    },
    {
      status: 200,
    },
  );
}

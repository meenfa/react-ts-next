import { NextResponse } from "next/server";

import { products } from "@/lib/productsData";
import { log } from "console";
// default is only for UI, for routes no default
// GET API
export async function GET(){
 return NextResponse.json(products);
}

// POST API 
export async function POST(request:Request){
    const body = await request.json();
    console.log("new product", body);
    
    return NextResponse.json({
        message:"Product Created Successfully",
        data:body,
    },{
        status:201,
    })
}

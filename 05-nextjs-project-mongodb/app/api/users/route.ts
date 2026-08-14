import {NextRequest, NextResponse} from "next/server"
import {connectDB} from "@/lib/mongodb"
import { ObjectId } from "mongodb";
import { error } from "console";

export async function GET() {
    const db = await connectDB();

    const users = await db
        .collection("users")
        .find({})
        .toArray();

        return NextResponse.json(users)
}

// POST API
export async function POST(req:NextRequest) {
    const db = await connectDB();

    const body = await req.json();

    const result = await db.collection("users").insertMany(body)

    return NextResponse.json({
        message: "user created successfully",
        data:result
    })

}

export async function  PUT(req:NextRequest) {
    const db = await connectDB();

    const body = await req.json();

    const {id,email,name} = body;

    const result = await db.collection("users").updateOne(
        // updateOne method takes 2 para id n data
        {_id: new ObjectId(id)},
        {
            $set:{
                name,email
            }
        }
    )

     return NextResponse.json({
        message: "user updated with PUT successfully",
        data:result
    })
}

export async function  PATCH(req:NextRequest) {
    const db = await connectDB();

    const body = await req.json();

   const {id, ...updatedFields} = body;

   if(!id){
    return NextResponse.json(
        {error:"ID required"},
        {status:400}
    )
   };

    const result = await db.collection("users").updateOne(
        // updateOne method takes 2 para id n data
        {_id: new ObjectId(id)},
        {
            $set:updatedFields
        }
    )

     return NextResponse.json({
        message: "user updated with PATCH successfully",
        data:result
    })
}

export async function  DELETE(req:NextRequest) {
   try{
    const db = await connectDB();
    const body = await req.json();

    const {id}= body;

    const result = await db.collection("users").deleteOne({
        _id:new ObjectId(id)
    });

    if(result.deletedCount === 0){
         return NextResponse.json({
        message:"Not found",
       
    })
    }
     return NextResponse.json({
        message:"User deleted successfully",
    })
   }catch(error){
    return NextResponse.json({
        message:"Error deleting user",
         error: error instanceof Error ? error.message : "Unknown error"
    })
   }
}
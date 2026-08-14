import clientPromise from "@/lib/mongodb";

export async function GET() {
    const client = await clientPromise;

    const db = client.db("next_mongodb_course");

    return Response.json({
        message: "DB Connected Successfully"
    });
}
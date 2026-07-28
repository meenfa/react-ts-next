import { NextResponse } from 'next/server';

export async function POST(request:Request) {
    const {email, password} = await request.json();

    // Demo Credentials
    if(email === "admin@gmail.com" && password === "admin"){
        const response = NextResponse.json({
            message: "Login Successful"
        });

        //set auth cookie
        response.cookies.set("auth","true",{
            httpOnly: true,
            path:'/'
        })
        return response;
    }
    return NextResponse.json(
        {
            message:"Invalid Credentials"
        },
        {status:401}
    );
} 
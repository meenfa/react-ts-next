"use client"

import { cookies } from "next/headers";
import { useEffect, useState } from "react";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const email = cookieStore.get("email")?.value;
  const [data, setdata] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token");

  
    return () => {
    
    }
  }, [])
  
  return (
    <div>
      <h2>This is Dashboard page</h2>
      
    </div>
  );
}
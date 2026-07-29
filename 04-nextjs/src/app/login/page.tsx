"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin() {
    const res = await fetch(`/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    // const data = await res.json();
 
    // if (data.token) {
    if(res.ok){
      // localStorage.setItem("token",data.token);
      router.push("/dashboard");
      router.refresh();
    } else {
      alert("Login failed,Invalid Credentials");
    }
  }

  return (
    <div className="flex items-center justify-center">

    <div className="w-96">
      <h1 className="mb-4 text-base font-semibold">Login to dashboard</h1>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="h-8 px-3 border border-gray-400 rounded-md"
        />

        <input
          placeholder="pass"
          onChange={(e) => setPassword(e.target.value)}
          className="h-8 border px-3 border-gray-400 rounded-md"
        />

        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
    </div>
  );
}

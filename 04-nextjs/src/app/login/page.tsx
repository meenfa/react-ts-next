"use client";

import { Button } from "@base-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin(){
    const res = await fetch(`/api/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({email, password}),
    });

    if(res.ok){
        router.push("/dashboard");
    } else{
        alert("Login failed")
    }  
  }

  return (
    <div>
      <h1>Login to dashboard</h1>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="pass"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}

"use client";
// use client because 
// useRouter is a hook which is a client side component, 
// that only works in the browser
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter();

  function handleClick(){
    router.push("/");
  }
  return (
    <div>
      <h2>This is Dashboard page</h2>
      <button onClick={handleClick}>Goto home page</button>
    </div>
  );
}

import type { ReactNode } from "react";
import Sidebar from "../components/layout/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

<div className="flex min-h-screen">
    <Sidebar />
    <main className=".flex-grow p-8">
        {children}
      </main>
</div>    

)
}
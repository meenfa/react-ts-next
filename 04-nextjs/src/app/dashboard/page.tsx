import { cookies } from "next/headers";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const email = cookieStore.get("email")?.value;

  return (
    <div>
      <h2>This is Dashboard page</h2>
      <p>Logged in email is {email}</p>
    </div>
  );
}
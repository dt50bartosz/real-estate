import PropertiesTable from "@/componet/admin/properties-table/properties-tables";
import SideBar from "@/componet/admin/side-bar";
import { cookies } from "next/headers";

export default async function Properties() {
  const cookieStore = await cookies();
  const authCookie = await cookieStore.get("auth_token");



  if (!authCookie) {
    throw new Error("Auth cookie not found");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_HTML}/property/all-properties`,{
    headers: {
      Cookie: `auth_token=${authCookie.value}`,
    },
    credentials: "include", 
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch properties");
  }

  const properties = await res.json();
 
  return (
    <main className="flex mt-[5rem] mb-[5rem] gap-10">
      <SideBar />
      <PropertiesTable data={properties} />
    </main>
  );
}

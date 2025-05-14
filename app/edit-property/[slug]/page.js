// app/edit-property/[slug]/page.js

import SideBar from "@/componet/admin/side-bar";
import { slugToTitle } from "@/lib/utils";

export default async function EditPropertyPage({ params }) {
  const { slug } = await params;
  console.log("params",slug);

  const res = await fetch(`${process.env.NEXT_PUBLIC_HTML}/property/property-by-title/${slugToTitle(slug)}`);
  
  if (!res.ok) {
    // Handle error or return a 404 component
    return (
      <main className="flex mt-[5rem] mb-[5rem] gap-10">
        <SideBar />
        <p>Failed to load property with slug: {slug}</p>
      </main>
    );
  }

  console.log("res",res.body)

  return (
    <main className="flex mt-[5rem] mb-[5rem] gap-10">
      <SideBar />
      <p>Editing property: {slug}</p>
    </main>
  );
}

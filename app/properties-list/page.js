import PropertiesTable from "@/componet/admin/properties-table/properties-tables";
import SideBar from "@/componet/admin/side-bar";

export default async function Properties() {
  let properties;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HTML}/properties/all-properties`, {
      cache: 'no-store',
    });

    if (res.ok) {
      properties = await res.json();
    } else {
      properties = "No Properties";
    }
  } catch (error) {
    console.error("Error fetching properties:", error);
    properties = "No Properties";
  }

  return (
    <main className="flex mt-[5rem] mb-[5rem] gap-10">
      <SideBar />
      <PropertiesTable data={properties} />
    </main>
  );
}

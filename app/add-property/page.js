import SideBar from "@/componet/admin/side-bar";
import AddPropertyForm from "@/componet/admin/add-property/add-property-form";

export default function AddProperty() {
  return (
    <main className="flex mt-[5rem] mb-[5rem] gap-10">
        <SideBar/>
        <AddPropertyForm/>
      
    </main>
  );
}
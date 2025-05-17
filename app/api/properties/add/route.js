import { createProperty } from "@/lib/properties/propertieService";



export async function POST(request) {
  try {
    const formData = await request.formData();  
    const photos = formData.getAll("photos");     


    const result = await createProperty(formData,photos);

    return new Response(
      JSON.stringify({ message: "Property created", result }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error saving property:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create property" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

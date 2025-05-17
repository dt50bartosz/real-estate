import { getPropertyByTitle } from "@/lib/properties/propertieService";


export async function GET(req,) {

  const url = new URL(req.url);
  const pathname = url.pathname;
  const title = pathname.split("/").pop(); 

  

  try {
    const property = await getPropertyByTitle(title);
    console.log("properrty",property);

    if (!property) {
      return new Response(JSON.stringify({ message: "Property not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.error("Error fetching property:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
  }
}

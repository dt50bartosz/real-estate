import { getFilteredProperties } from "@/lib/properties/propertieService";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const searchParams = url.searchParams;
    console.log("searchPara",searchParams);
    const properties = await getFilteredProperties(searchParams);


    return new Response(JSON.stringify(properties), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching properties:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

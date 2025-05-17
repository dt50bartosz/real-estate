import { getLatestProperties } from "@/lib/properties/propertieService";

export async function GET() {
  try {
   
    const properties = await getLatestProperties();

    return new Response(JSON.stringify(properties), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to fetch properties." }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
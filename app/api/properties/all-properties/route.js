import { getAllProperties } from "@/lib/properties/propertieService";

export async function GET() {
  try {
    console.log("hha");
    const properties = await getAllProperties();

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

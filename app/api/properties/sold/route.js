import { markAsSold } from "@/lib/properties/propertieService";

export async function PATCH(req) {
  try {
    const { propertyId } = await req.json();

    if (!propertyId) {
      return new Response(JSON.stringify({ message: "propertyId is required" }), {
        status: 400,
      });
    }

    const result = await markAsSold(propertyId);

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error('Error in PATCH /sold:', error);
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}
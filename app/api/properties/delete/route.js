import { deleteProperty } from '@/lib/properties/propertieService';

export async function DELETE(req) {
  try {
    const { propertyId } = await req.json();

    if (!propertyId) {
      return new Response(JSON.stringify({ message: "propertyId is required" }), { status: 400 });
    }

    const result = await deleteProperty(propertyId);

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}

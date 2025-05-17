export async function POST(request) {

    const formData = await request.formData();
  const file = formData.get("photos");

  console.log("body",file)

    const buffer = Buffer.from(await file.arrayBuffer());

  return new Response(JSON.stringify({ message: 'Test OK' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

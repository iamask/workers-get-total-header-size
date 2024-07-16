/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
  let totalHeaderSize = 0;

  // Iterate through request headers
  for (const [name, value] of request.headers) {
    // Calculate the size of each header
    const headerSize = name.length + value.length;
    totalHeaderSize += headerSize;

    // You can log or process individual headers here if needed
    console.log(`${name}: ${value}`);
  }

  // Log or use the totalHeaderSize
  console.log(`Total Header Size: ${totalHeaderSize} bytes`);

  // Your logic here

   const responseText = `Total Header Size: ${totalHeaderSize} bytes}`;
  const customResponse = new Response(responseText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });

  // Return the custom response
  return customResponse;

  // Pass the request to the origin or modify it and respond accordingly
  //return fetch(request);
},
};


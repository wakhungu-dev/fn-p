import { createRouteHandler } from "uploadthing/next";
 
import { ourFileRouter } from "./core";
import { UTApi } from "uploadthing/server";
 
// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
 
  // Apply an (optional) custom config:
  // config: { ... },
});

export async function DELETE(request: Request){
  const {filekey} = await request.json();
  const utApi = new UTApi();
  await utApi.deleteFiles(filekey);
  return Response.json({message: 'Image deleted successfully'})
}
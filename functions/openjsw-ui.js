export async function onRequest() {
  return new Response('window.test="ok";', {
    headers: { "content-type": "application/javascript" }
  });
}

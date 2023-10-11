export default defineEventHandler((event) => {
  console.log("** server middleware **");

  console.log("New request: " + event.req.url);
  console.log("Req method: " + event.req.method);
});

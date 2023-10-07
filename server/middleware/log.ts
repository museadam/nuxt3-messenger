export default defineEventHandler((event) => {
  console.log("** server middleware **");

  console.log("New request: " + event.req.url);
});

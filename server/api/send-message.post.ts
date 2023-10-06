import WebSocket from "ws";

export default defineEventHandler(async (event) => {
  const { message } = await readBody(event);
  // const {} = message
  console.log("message", message);
  console.log("globalThis.clients", globalThis.clients);

  globalThis.clients.forEach(function (client, isBinary) {
    if (client.id !== message.from && client.readyState === WebSocket.OPEN) {
      console.log("Client", client);
      client.send(message.text);
    }
  });

  return {
    statusCode: 200,
    body: "This is done",
  };
});

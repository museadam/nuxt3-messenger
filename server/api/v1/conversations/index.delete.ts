import prisma from "~/utils/prisma/client";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { roomId } = body;
  console.log(roomId);
  try {
    const res = await prisma.conversation.delete({
      where: {
        id: roomId,
      },
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }

  return {};
});

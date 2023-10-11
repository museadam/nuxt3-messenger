import prisma from "~/utils/prisma/client";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { roomId } = body;
  try {
    const res = await prisma.conversation.delete({
      where: {
        id: roomId,
      },
    });
  } catch (e) {
    console.log(e);
  }
  return {};
});

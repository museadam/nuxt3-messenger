import prisma from "~/utils/prisma/client";
import type { Conversation } from "@prisma/client";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { userId, roomId } = body;
  const conversation: Conversation = await prisma.conversation.update({
    where: {
      id: roomId,
    },
    data: {
      users: {
        connect: {
          id: userId,
        },
      },
    },
  });
  return {
    conversation,
  };
});

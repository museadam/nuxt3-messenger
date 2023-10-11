import prisma from "~/utils/prisma/client";
import type { Conversation } from "@prisma/client";
export default defineEventHandler(async () => {
  const conversations: Conversation[] = await prisma.conversation.findMany({
    include: {
      users: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  return {
    conversations,
  };
});

import prisma from "~/utils/prisma/client";
import type { Message } from "@prisma/client";
export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const messages: Message[] = await prisma.message.findMany({
    where: {
      conversation: {
        id,
      },
    },
  });
  return {
    messages,
  };
});

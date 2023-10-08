import prisma from "~/utils/prisma/client";
import type { Conversation } from "@prisma/client";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name } = body;
  const conversation: Conversation[] = await prisma.conversation.create({
    data: {
      name,
    },
  });
  return {
    conversation,
  };
});

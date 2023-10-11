import prisma from "~/utils/prisma/client";
import type { Message } from "@prisma/client";
import type { APIResponse } from "~/types/api";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { message, convoId, userId } = body;
  const response: APIResponse<Message> = { status: 500 };

  const createMessage = await prisma.message.create({
    data: {
      text: message,
      from: {
        connect: {
          id: userId,
        },
      },
      conversation: {
        connect: {
          id: convoId,
        },
      },
    },
  });
  if (createMessage) {
    response.status = 200;
    response.data = createMessage;
  }
  console.log(createMessage);

  return {
    ...response,
  };
});

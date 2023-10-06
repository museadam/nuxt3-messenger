import prisma from "~/utils/prisma/client";
import type { User } from "@prisma/client";
import type { APIResponse } from "~/types/api";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email } = body;
  const response: APIResponse<User> = { status: 500 };

  const getUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (getUser) {
    response.status = 200;
    response.data = getUser;
  } else {
    response.status = 400;
    response.message = "Cant find user with this email: " + email;
  }
  return {
    ...response,
  };
});

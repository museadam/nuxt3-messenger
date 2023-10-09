import prisma from "~/utils/prisma/client";
import type { User } from "@prisma/client";
import type { APIResponse } from "~/types/api";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id } = body;
  const response: APIResponse<User> = { status: 500 };

  const getUser = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (getUser) {
    response.status = 200;
    response.data = getUser;
  }
  console.log(getUser);

  return {
    ...getUser,
  };
});

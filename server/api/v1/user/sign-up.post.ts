import prisma from "~/utils/prisma/client";
import type { User } from "@prisma/client";
import type { APIResponse } from "~/types/api";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // const { data } = body;
  const response: APIResponse<User> = { status: 500 };
  // console.log(body);
  // console.log("body");

  const createUser = await prisma.user.create({
    data: {
      ...body,
    },
  });
  if (createUser) {
    response.status = 200;
    response.data = createUser;
  }
  return {
    ...response,
  };
});

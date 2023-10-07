import prisma from "~/utils/prisma/client";
import type { User } from "@prisma/client";
export default defineEventHandler(async () => {
  const users: User[] = await prisma.user.findMany();
  return {
    users,
  };
});

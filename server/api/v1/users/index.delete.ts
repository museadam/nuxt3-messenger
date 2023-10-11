import prisma from "~/utils/prisma/client";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { userId } = body;
  const res = await prisma.user.delete({
    where: {
      id: userId,
    },
  });
  return {};
});

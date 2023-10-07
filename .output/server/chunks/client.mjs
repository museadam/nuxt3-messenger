import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
prisma.$use(async (params, next) => {
  console.log("<Prisma Middleware BEFORE params...");
  const result = await next(params);
  console.log("...Prisma Middleware AFTER params>");
  return result;
});
const prisma$1 = prisma;

export { prisma$1 as p };
//# sourceMappingURL=client.mjs.map

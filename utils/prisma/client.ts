import { PrismaClient } from "@prisma/client";
// import pkg from '@prisma/client';
// const { PrismaClient } = pkg;

const prisma = new PrismaClient();
prisma.$use(async (params, next) => {
  // Manipulate params here
  console.log("<Prisma Middleware BEFORE params...");
  const result = await next(params);
  // See results here
  console.log("...Prisma Middleware AFTER params>");

  return result;
});
export default prisma;

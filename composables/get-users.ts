// import type { User } from "@prisma/client";
// import type { APIResponse } from "~/types/api";
export const useGetUsers = async () => {
  const { data: users } = await useFetch("/api/v1/users");
  return users;
};

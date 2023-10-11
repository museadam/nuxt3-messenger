import type { User } from "@prisma/client";

export const useSignUp = async (userData: Partial<User>) => {
  const user = await $fetch("/api/v1/user/sign-up", {
    method: "POST",
    body: {
      ...userData,
    },
  });
  return user;
};

export const useLogin = async (email: string) => {
  const user = await $fetch("/api/v1/user/login", {
    method: "POST",
    body: {
      email,
    },
  });
  return user;
};

export const useGetUser = async (id: string) => {
  const { data: user } = await useFetch("/api/v1/user", {
    key: id,
    method: "POST",
    body: {
      id,
    },
  });

  return user;
};

export const useGetUsers = async () => {
  const { data: users } = await useFetch("/api/v1/users");
  return users.value.users;
};

// admin
export const useDeleteUser = async (userId: string) => {
  await useFetch("/api/v1/users", {
    method: "DELETE",
    body: {
      userId,
    },
  });
  return;
};

// cookie
export const useSetCookie = (name: string, data: unknown) => {
  const res = useCookie(name, {
    default: () => ({ ...data }),
    watch: false,
  });
  return res;
};

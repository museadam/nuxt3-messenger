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

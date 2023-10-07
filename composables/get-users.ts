export const useGetUsers = async () => {
  const { data: users } = await useFetch("/api/v1/users");
  return users;
};

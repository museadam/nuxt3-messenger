export const useRoomMessages = async (id: string) => {
  const { data: messages } = await useFetch(`/api/v1/messages/${id}`);
  return messages.value?.messages ?? [];
};

export const useUserMessages = async () => {
  const { data: messages } = await useFetch("/api/v1/messages/by-user");
  return messages;
};

export const useChatRooms = async () => {
  const { data: rooms } = await useFetch("/api/v1/conversations");
  return rooms;
};

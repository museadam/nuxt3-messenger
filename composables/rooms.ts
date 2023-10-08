export const useChatRooms = async () => {
  const { data: rooms } = await useFetch("/api/v1/conversations");
  return rooms;
};
export const useCreateRoom = async (name: string) => {
  const { data: room } = await useFetch("/api/v1/conversations", {
    key: name,
    method: "POST",
    body: {
      name,
    },
  });

  return room;
};

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

export const useAddNewMember = async (userId: string, room: string) => {
  const { data: newRoom } = await useFetch("/api/v1/conversations", {
    key: room,
    method: "PUT",
    body: {
      userId,
      roomId: room,
    },
  });

  return newRoom;
};

export const useDeleteRoom = async (room: string) => {
  await useFetch("/api/v1/conversations", {
    method: "DELETE",
    body: {
      roomId: room,
    },
  });
  return;
};

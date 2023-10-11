export const useStoreMessage = async (
  message: String,
  convoId: String,
  userId: String
) => {
  const { data: msg } = await useFetch("/api/v1/messages", {
    method: "POST",
    body: {
      message,
      convoId,
      userId,
    },
    watch: false,
  });
  return msg;
};

export const onSendMessage = async (
  message: String,
  convoId: String,
  userId: String
) => {
  const msg = await useStoreMessage(message, convoId, userId);
  const data = {
    message: msg.value?.data,
    room: convoId,
  };
  useSocket().emit("send:private-chat", data);
  return "Sent!";
};

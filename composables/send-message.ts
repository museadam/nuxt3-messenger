// export const onStoreMessage = async ()
export const onSendMessage = async (
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
  console.log(toRaw(msg.value.data));
  const data = {
    message: toRaw(msg.value.data),
    room: convoId,
  };
  useSocket().emit("send:private-chat", data);
  return "Sent!";
};

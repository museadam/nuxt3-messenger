import { Message } from "~/types/message";
export const onSendMessage = async (message: Message) => {
  const data = {
    message: msg,
    room: room.value,
  };
  socket.emit("send:private-chat", data);
  return ret;
};

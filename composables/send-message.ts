import { Message } from "~/types/message";
export const onSendMessage = async (message: Message) => {
  const ret = await $fetch("/api/send-message", {
    method: "POST",
    body: JSON.stringify({
      message: message,
    }),
  });
  return ret;
};

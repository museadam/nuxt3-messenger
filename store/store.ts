import { Message } from "~/types/message";
export const messages: Ref<Message[]> = ref([]);
export const message = ref("");

export const currentUser = reactive({
  name: "",
  id: "",
});

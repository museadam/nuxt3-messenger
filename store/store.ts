import { Message } from "~/types/message";
import type { User } from "@prisma/client";

export let messages: Ref<Message[]> = ref([]);
export let message = ref("");

export let currentUser: User | {} = ref({});

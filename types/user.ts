import type { Conversation } from "@prisma/client";

export interface BasicUser {
  name: string;
  id: string;
}

export interface RoomDetail extends Conversation {
  users: BasicUser[];
}

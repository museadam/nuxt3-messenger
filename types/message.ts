// export interface Message {
//   id: String;
//   room: String;
//   from: String; // user.id
//   date: string;
//   text: String;
// }
import type { Message as M } from "@prisma/client";
export interface Message extends M {}

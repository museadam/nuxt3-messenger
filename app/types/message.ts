export interface Message {
  id: String;
  room: String;
  from: String; // user.id
  date: string;
  text: String;
}

import { User } from "~/types/user";
interface RoomUser extends User {
  room: string;
}
export class roomUsers {
  users: RoomUser[];
  constructor() {
    this.users = [];
  }

  addUser(id: string, name: string, room: string) {
    const user: RoomUser = { id, name, room };
    this.users.push(user);
    return user;
  }

  getUserList(room: string) {
    const users = this.users.filter((user) => user.room === room);
    const namesArray = users.map((user) => user);

    return namesArray;
  }

  getUser(id: string) {
    return this.users.filter((user) => user.id === id)[0];
  }

  // getUserSlug(slug) {
  //   return this.users.filter((user) => user.slug === slug)[0];
  // }

  removeUser(id: string) {
    const user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }

  // removeUserSlug(slug) {
  //   const user = this.getUserSlug(slug);

  //   if (user) {
  //     this.users = this.users.filter((user) => user.slug !== slug);
  //   }

  //   return user;
  // }
}
// export const users = new roomUsers();

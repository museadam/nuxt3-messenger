import { defineIOHandler } from "../../modules/module";
import { roomUsers } from "../../utils/room-users";
export default defineIOHandler((io) => {
  const connectedUsers = {};
  const messages = [];
  const users = new roomUsers();
  io.on("connection", (socket) => {
    // console.log("Connected ", socket.id);
    socket.on("register", function (user) {
      console.log("User" + user + "has connected to " + socket.id);
    });

    socket.on("joined-room", function (room, user) {
      socket.join(room);
      const name = user.name;

      console.log("user " + name + " joined the " + room + " chat room");
      const id = user.id;
      // remove from existing if any
      users.removeUser(id);
      users.addUser(id, name, room);
      const users2 = users.getUserList(room);
      io.to(room).emit("updated-user-list", users2);
    });

    socket.on("send:private-chat", async function (data) {
      const { message, room } = data;

      const usersArr = users.getUserList(room);
      // if the users are both connected to the chat then send private-chat only
      // if (usersArr.length === 2) {
      console.log(message);
      console.log("message");
      console.log(room);

      io.to(room).emit("receive:private-chat", {
        message,
      });
      // } else {
      // only one user connected so send as notification
      // }
    });

    socket.on("disconnecting", () => {
      console.log("disconnecting socket... " + " your rooms: " + socket.rooms); // the Set contains at least the socket ID
    });

    socket.on("leave-room", (room, user) => {
      socket.leave(room);
      const leftUser = users.removeUser(user.id);
      // console.log();
      // console.log('User left the chat')
      io.to(room).emit("updated-user-list", users.getUserList(room));
      const message = "User left the chat";
      io.to(room).emit("new-message", message);
    });
  });
});

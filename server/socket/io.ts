import { defineIOHandler } from "../../modules/module";
import { roomUsers } from "../../utils/room-users";
export default defineIOHandler((io) => {
  const connectedUsers = {};
  const messages = [];
  const users = new roomUsers();
  io.on("connection", (socket) => {
    // console.log("Connected ", socket.id);
    socket.on("register", function (user) {
      console.log("User has connected to " + socket.id);
      // TODO: Trigger a load of the conversations for the user upon registration
      // console.log('user ' + slug + ' has entered the chat')
      // connectedUsers[user.id];
      // connectedUsers[slug].emit('receive:register', {
      //   connectedUsers
      // })
    });
    // socket.on("unregister", function (user) {
    //   console.log("user " + slug + " has left the chat");
    //   delete connectedUsers[user.id];
    //   // connectedUsers[slug].emit('receive:unregister', {
    //   //   connectedUsers
    //   // })
    //   const user = users.removeUser(socket.id);
    //   if (user) {
    //     // console.log('User left the chat')
    //     io.to(user.room).emit(
    //       "updated-user-list",
    //       users.getUserList(user.room)
    //     );
    //     const message = "User left the chat";
    //     io.to(user.room).emit("new-message", message);
    //   }
    // });
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

    // * If receiving user is not connected
    // disconnect function
    socket.on("disconnecting", () => {
      console.log("disconnecting... your rooms: " + socket.rooms); // the Set contains at least the socket ID
    });
    // TODO: Remove user from connected users when user disconnects
    // socket.on("disconnect", (room, user) => {
    //   // console.log('got disconnected')
    //   const user = users.removeUser(socket.id);
    //   if (user) {
    //     // console.log('User got disconnected')
    //     // io.to(room).emit(
    //     //   "updated-user-list",
    //     //   users.getUserList(room)
    //     // );
    //     // const message = "User has disconnected";
    //     // io.to(room).emit("new-message", message);
    //   }
    //   // TODO: Remove users from connected users
    //   // socket.rooms.size === 0
    // });
    socket.on("leave-room", (room, user) => {
      // console.log('leaving room')
      socket.leave(room);
      const user1 = users.removeUser(user.id);
      if (user1) {
        // console.log('User left the chat')
        io.to(room).emit("updated-user-list", users.getUserList(room));
        const message = "User left the chat";
        io.to(room).emit("new-message", message);
      }
      // console.log(socket.rooms)

      // socket.emit('disconnect')
    });

    // Get last messages
    // socket.on('last-messages', function (fn) {
    //   fn(messages.slice(-50))
    // })
    // ! Deprecated
    // socket.on('send-message', function (message) {
    //   socket.broadcast.emit('new-message', message)
    // })
  });
});

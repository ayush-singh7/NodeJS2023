const app = require('express')();
const http = require('http').createServer(app);
const fs = require('fs');

onlineUsers = [];
allGroups = [];
groupChats = {};
const io = require('socket.io')(http, {
  cors: {
    origins: '*'
  }
});

io.on('connect', (socket) => { //predefined

  // io.emit('userID', ()=> socket.id)

  socket.on('userID', () => {
    socket.emit('mySocketID', socket.id)
  })

  socket.on('groupTotal', () => {
    io.emit('allGroupsList', allGroups)
  })

  socket.on('join', (userData) => {


    let allUsersInRoom = io.sockets.adapter.rooms.get(userData.groupName)

    if (allUsersInRoom && allUsersInRoom.size >= 5) {
      socket.emit("error", { errorMessage: "Maximum 5 users in a Group" })
    } else {
      socket.join(userData.groupName);  // assigns user to a certain room
      let key = userData.groupName;
      if(groupChats.hasOwnProperty(key)){
        
        io.in(key).emit('old group chats',groupChats[key] )
      }
      
     socket.broadcast.to(userData.groupName).emit('new user joined', { from: userData.userName, message: 'has joined the chat', to_group: userData.groupName, userID: socket.id })
     
     
    }


  });

  socket.on('leave group', (groupData)=>{
    
    socket.leave(groupData.groupName);

    socket.broadcast.to(groupData.groupName).emit('new user joined', { from: groupData.userName, message: 'has left the chat', to_group: groupData.groupName })

  })

  socket.on('message', (messageData) => { // event to send message

    if (messageData.type == 'private') {
      io.to(messageData.to).emit('new message', { to_name: messageData.to_name, message: messageData.message, from: messageData.from })
      socket.emit('new message', { to_name: messageData.to_name, message: messageData.message, from: messageData.from })

    } else if (messageData.type == 'group') {
      
      let key = messageData.to_group
      let messageObj = {
        message:messageData.message,
        from:messageData.from,
        to_group:messageData.to_group
      }

     if(groupChats.hasOwnProperty(key) == false) { //store old mssg into a new key value pair
        groupChats[key] = [];
        groupChats[key].push(messageObj);
     }else{
        groupChats[key].push(messageObj); // store messages into an existing key        
     }
     console.log(groupChats[key]);
    //  fs.writeFile('./messageData.json',()=>{ JSON.stringify(groupChats)});
     
     
     io.in(messageData.to_group).emit('new message', { message: messageData.message, from: messageData.from, to_group: messageData.to_group });

    }
  })

  socket.on('userOnline', (userData) => { // emit lsit of online users

    if (userData?.userName) {
      onlineUsers.push(userData)
    }
    io.emit('onlineUsersList', onlineUsers)


  })

  socket.on('groupMade', (groupData) => { // emit list of active groups
    console.log(groupData);
    allGroups.push(groupData.name)
    console.log(allGroups, "ALLG");
    io.emit('allGroupsList', allGroups)
  })

  socket.on('typing', (typingInfo) => { // for typing state emission

    if (typingInfo.to_group) {
      socket.broadcast.to(typingInfo.to_group).emit('typingStatus', { userName: typingInfo.userName })
    } else {
      io.to(typingInfo.to).emit('typingStatus', { userName: typingInfo.userName })
    }

  })


  socket.on('disconnect', () => {  //predefined
    console.log(socket.id, "SOCK"); // removing the user that got added into the array

    onlineUsers = onlineUsers.filter((singleUser) => {
      if (singleUser.userID != socket.id) {
        return singleUser;
      }
    })
    io.emit('onlineUsersList', onlineUsers) // emit list of all the users online 
    console.log('user disconnected !!!!');
  });



});


http.listen(3000, () => {
  console.log('listening on *:3000');
});
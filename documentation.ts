// REQUIREMENT 1

// ENDPOINT: /register

// METHOD: POST 

// payload:

// {
//     "email":"jackma@gmail.com",
//     "password": "jack123",
//     "username":"jackie"
// }

// REQUIREMENT 2

// ENDPOINT: /login

// METHOD: POST 

// payload:
// {
//     "email":"jackma@gmail.com",
//     "password": "jack123",
// }

// RESPONSE: jwt token

//AFTER HERE ALL ROUTES are authenticated using x-access-token

// REQUIREMENT 3

// ENDPOINT: /create-chat

// METHOD: POST

// payload: 

// {to_id: 3} payload



// REQUIREMENT 4

// ENDPOINT: /send-message

// METHOD: POST

// payload: 

// { message_content:"GOOD NIGHT", room_id:"A2", sender_id:"3"}


// REQUIREMENT 5

// ENDPOINT: /rooms

// METHOD: DELETE

// queryparams: room_id:B52


// REQUIREMENT 6

// ENDPOINT: /chats

// METHOD: GET
// query params:{
// page: 1, size:5
// }





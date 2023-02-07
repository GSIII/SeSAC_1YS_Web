const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/prac42.html");
});

//클라이언트 소켓이 연결이 되면 콜백함수가 실행된다.
//콜백함수 인자 socket : 클라이언트 소켓과 연결 되고 새로 생성된 소켓
//현재 콜백함수 인자의 socket을 사용할 것이기 때문에 io.on 안에서 코드를 작성해야 한다.
io.on("connection", (socket) => {
  let data = {
    hello: "안녕하세요",
    study: "공부하세요",
    bye: "안녕히가세요",
  };

  socket.on("send", (msg) => {
    console.log(msg);
    socket.emit("response", msg + ":" + data[msg]); //data['hello']가 들어오면 안녕하세요
  });
});

http.listen(8000, () => {
  console.log("server port : ", 8000);
});

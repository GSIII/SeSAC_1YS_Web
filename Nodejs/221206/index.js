const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes");
app.use('/visitor', router);

const routerUser = require("./routes/user");
app.use('/user', routerUser);

app.get('*', (req, res)=>{
    res.send("주소가 올바르지 않습니다.");
});

app.listen(port, ()=>{
    console.log("server open: ", port);
});
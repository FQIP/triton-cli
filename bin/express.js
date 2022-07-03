import express from "express";

const app = express();

app.use(express.static("./public"));

app.post("/", async (req, res) => {
  res.send('hello express')
});

app.listen(3000, () => {
  console.log("启动成功，端口号：3000");
});

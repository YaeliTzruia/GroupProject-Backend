const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 4000;

mongoose
  .connect(
    "mongodb+srv://davita:6ujn9iUHkfopoMrG@cluster0.j6qur.mongodb.net/Group_Project",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`our server is running on port: ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

app.use(
  cors({
    orgin: "3000",
    credentials: true,
  })
);

app.use("/users", require("./routes/users"));

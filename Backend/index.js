const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded());
//routes
const UsersRoutes = require("./routes/users");

//Mongo
mongoose
  .connect(
    "mongodb+srv://davita:6ujn9iUHkfopoMrG@cluster0.j6qur.mongodb.net/Group_Project",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB is successfully connected"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//routes
app.use("/users", UsersRoutes);

//to parse body
app.use(express.json());

app.listen(PORT, () => {
  console.log(`our server is running on port: ${PORT}`);
});

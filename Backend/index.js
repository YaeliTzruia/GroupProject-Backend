require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.API_PORT;
const mongoose = require("mongoose");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("combined"));

//error handling (all next with text)
app.use((err, req, res, next) => {
  const { status, msg } = err;
  console.log("ERROR", err);
  res.status(status).send({
    error: true,
    message: msg,
  });
});

//routes
const ProduceRoutes = require("./routes/products");
const UsersRoutes = require("./routes/users");
const AdminRoutes = require("./routes/admin");
const RecipesRoutes = require("./routes/recipes");

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
app.use("/products", ProduceRoutes);
app.use("/users", UsersRoutes);
app.use("/admin", AdminRoutes);
app.use("/recipes", RecipesRoutes);

app.listen(PORT, () => {
  console.log(`our server is running on port: ${PORT}`);
});

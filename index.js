const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./authRouter");

const PORT = process.env.PORT || 5000;
const DB_URL = "***";

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("server started om port: ", +PORT));
  } catch (error) {
    console.log(error);
  }
};

startApp();

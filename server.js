const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.LOCAL_DB)
  .then(() => {
    console.log("Data base s been connected");
  })
  .catch((err) => console.log(err));

const port = process.env.PORT || 8001;
app.listen(port, "127.0.0.1", () => {
  console.log(`App is listening for yor requests on localhost on port ${port}`);
});
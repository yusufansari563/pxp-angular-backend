const app = require("./app");
const mongoDb = require("mongoose");

require("dotenv").config();

const MONGODB_URL = process.env.MONGO_URL;

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  mongoDb
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("connected <>?");
    })
    .catch((err) => console.log(err));

  /* eslint-enable no-console */
});

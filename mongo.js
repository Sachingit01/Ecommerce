const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/react-login1")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed to connect");
  });
const NewSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("collection", NewSchema);

module.exports = collection;

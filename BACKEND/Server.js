const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bookRoute = require("./routes/book.Route");
const cors = require('cors');
const userRoute = require("./routes/user.Route");


const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;


try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("connected to mongoDB")
} catch (error) {
  console.log("Error", error);
}

app.use("/book", bookRoute);
app.use("/user", userRoute);


app.get('/', (req, res) => {
  res.send('MERN Project!')
})

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}`)
})
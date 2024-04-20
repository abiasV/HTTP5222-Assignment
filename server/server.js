const express = require("express"); //include express in this app
const app = express();
const cors = require('cors')
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE,{})

// const { MongoClient } = require('mongodb');
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}/`;
// const client = new MongoClient(uri);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const morgan = require("morgan");

//Middlewares
app.use(cors());
app.use(morgan("dev"));
// const path = require("path"); //module to help with file paths
const fs = require('fs');
const { connect } = require("http2");

// app.set("views", path.join(__dirname, "routes"));
fs.readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

// async function connection() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB Atlas111");
//     return client.db("booking");
//     // const db = client.db("booking");
//     // const usersCollection = db.collection("users");
//   } catch (err) {
//     console.error("Failed to connect to MongoDB Atlas", err);
//   }
// }

// app.get("/api/users", async(req,res) => {
//   try {
//     const db = await connection();
//     const users = await db.collection('users').find({}).toArray();
//     res.json(users);
//   } catch (error) {
//     console.log("error")
//   }
// })
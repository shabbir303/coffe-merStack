// Making a server
// 1.go to command prompt and type--> mkdir 'server name"
// 2.then type--> cd 'server name"
// 3.then type--> npm init -y
// 4.then type--> npm i express cors mongodb dotenv
// 5.then type--> code .
// 6.start the server just create --> index.js and open the terminal in vs code and type --> nodemon index.js
// 7.go to the browser and type--> http://localhost:5000


const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();


const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())

// UserName and Password
// 1.Go to MongoDB Atlas--> 
// 2.sign IN google-->if signe in don't use it 
// 3.Database Access--> 
// 4.Add new user-->
// 5.create userName & password-->
// 8NTK7CAwVS49okAd
// coffeeMaster
// 6.click add user-->

// Connect to MongoDB
// 1.Go to Database
// 2.Click on connect
// 3.Click on drivers
// 4.view full code and copy it

// it is used for control the leakage of userNAMe and password
// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASS);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zm5ln60.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://coffeeMaster:8NTK7CAwVS49okAd@cluster0.zm5ln60.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);






// root
app.get('/', (req,res)=>{
  res.send('coffie making server is running')
})

app.listen(port, ()=>{
  console.log(`coffie making server running of port: ${port}`);
})
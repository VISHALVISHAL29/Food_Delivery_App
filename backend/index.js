const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
})

app.use(express.json());
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api', require("./Routes/CreatUser"));
app.use('/api', require("./Routes/LoginUser"));
app.use('/api', require("./Routes/DisplayData"));
app.listen(port,() => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const userRouter = require('./router/user.js')
const port = process.env.PORT
require('./db/db')

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(port,()=>{
  console.log(`server is Running on ${port}`);
})

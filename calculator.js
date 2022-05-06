require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const urlRouter = require('./routes/url')

app.use(cors())
app.use(express.json());
app.use('/',urlRouter)


app.listen(process.env.port, ()=>{
    console.log('listening on 4000')
})

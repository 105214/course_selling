import express from 'express'
import routers from './route/index.js'
import dotenv from 'dotenv'
import DbConnect from './config/db.js'

dotenv.config()
const app= express()
const port = process.env.PORT


app.use(express.json())
DbConnect()
app.get('/',(req,res)=>{
    res.send("hello wold")
})


app.use('/api',routers)

app.listen(port,()=>{
    console.log(`server running on ${port}`)

})
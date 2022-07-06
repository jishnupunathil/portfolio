const express = require ('express')
const app= express()
const mongoose = require('mongoose')
const bodyParser=require('body-parser')

// mongoose.connect('mongodb+srv://jishnu:uesHTxFngUxdbieB@cluster0.myxbs.mongodb.net/testmonial_db?retryWrites=true&w=majority')
// .then((res)=>{
//     console.log('database connected successfuly');
// }).catch((err)=>{
//     console.log('an error occured'+err);
// })


const testmoRouter= require('./routes/testmo.routes')
// const testmonial=require('./src/model/testmonial')

app.use(bodyParser.json())
app.use('/testmo',testmoRouter)


app.get('',(req,res)=>{
    res.send('hello:uesHTxFngUxdbieB')
})

























app.listen(process.env.PORT || 5000,(res)=>{
    console.log('listening to port 5000');
})

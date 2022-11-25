const express = require('express')
const bodyparser = require('body-parser')
const handlebars = require('express-handlebars')
const nodemailer =  require('nodemailer')
const path = require('path')
//
const app = express()
//middleware


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended:false
}))

//route::
app.get('/',(req,res)=>{
  console.log('Test')
})


//config port::

const port = process.env.PORT || 7000
app.listen(port,()=>{
    console.log(`app is connected in port::${port}`)
})
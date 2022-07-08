const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routerFood = require('./router/foodRouter.js')

// register view engine 
app.set('view engine', 'ejs')  // npm install ejs
app.use(express.urlencoded({extended: true})) // untuk menerima data dari form

// register mongoDB
// mongodb ini menggunakan email school 
const uri = 'mongodb+srv://nodemongo:nodemongo123@rayhancluser.sf2yydf.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser:true, useUnifiedTopology: true },(err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('Connection')
    }
});

app.use(routerFood)


// listen to request
app.listen(3000)
const express = require('express')
const mongoose = require('mongoose')
const Food = require('./models/food.js')
const app = express()

// register view engine 
app.set('view engine', 'ejs')  // npm install ejs

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

app.get('/', (req,res) => {
    res.redirect('/blogs')
})

app.get('/foods', (req,res) => {
    Food.find().then((result) => { 
        res.render('index', {title: 'Food', data: result })
    }).catch((err) => {
        console.log(err)
    })
})

app.get('/about', (req,res) => {
    res.render('about', { title: 'About' })
})

// redirect sample
app.get('/about-me', (req,res) => {
    res.redirect('/about', { title: 'About' })
})

// view to form
app.get('/food/create', (req,res) => {
    res.render('create_food', { title: 'Create food' } )
})

// create data manually from url
// app.get('/add/food', (req,res) => {
//     const food = new Food( { name: 'Nasi Uduk', tentang: 'Uduk enak yang nyummy' }, );

//     food.save().then((result) => { res.send(result) }).catch((err) => {res.send(err) })
// })

// Getting data in mongodb = json 
// app.get('/findall', (req,res) => {
//     Food.find().then((resp) => { res.send(resp) }).catch((err) => { res.send(err) })
// })

app.use((req,res) => {
    res.render('404' , { title: '404 ' })
})

// listen to request
app.listen(3000)
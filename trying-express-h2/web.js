const express = require('express')
const mongoose = require('mongoose')
const Food = require('./models/food.js')
const app = express()

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

app.get('/', (req,res) => {
    res.redirect('/foods')
})

app.get('/foods', (req,res) => {
    
    Food.find().then((data) => { 
        res.render('index', { title: 'Food', data })
    }).catch((err) => {
        console.log(err)
    })
})

// view to form
app.get('/food/create', (req,res) => {
    res.render('create_food', { title: 'Create food' } )
})

// simpan data form
// post 
app.post('/foods', (req,res) => {
    // req body = request dari form
   const newFood = new Food(req.body)
   newFood.save().then((resp) => { res.redirect('/foods')}).catch((err) => { console.log(err) })
})


//detail
app.get('/foods/:id', (req,res) => {
    const id = req.params.id

    Food.findById(id).then((resp) => {
        res.render('details_food', { foodsDetail: resp, title: 'Detail'})
    }).catch((error) => {
        console.log(error)
    })
})

// delete 
app.delete("/foods/:id", function(req, res){
    Food.findByIdAndDelete(req.params.id)
    .then(() => res.json(
        { redirect: '/' }))
    .catch((err) => { console.log(err)})
  });


app.get('/about', (req,res) => {
    res.render('about', { title: 'About' })
})

// redirect sample
app.get('/about-me', (req,res) => {
    res.redirect('/about', { title: 'About' })
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

// app.use((req,res) => {
//     res.render('404' , { title: '404 ' })
// })

// listen to request
app.listen(3000)
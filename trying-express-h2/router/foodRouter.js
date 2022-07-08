const express = require('express')

const router = express.Router()

// controller
const foodController = require('../controllers/foodController')


router.get('/', (req,res) => {
    res.redirect('/foods')
})

router.get('/foods', foodController.food_index)

// view to form
router.get('/food/create', (req,res) => {
    res.render('create_food', { title: 'Create food' } )
})

// simpan data form
// post 
router.post('/foods', foodController.store_food)


//detail
router.get('/foods/:id', foodController.detail_food)

// delete 
router.delete("/foods/:id", foodController.delete_food);


router.get('/about', (req,res) => {
    res.render('about', { title: 'About' })
})

// redirect sample
router.get('/about-me', (req,res) => {
    res.redirect('/about', { title: 'About' })
})


// create data manually from url
// router.get('/add/food', (req,res) => {
//     const food = new Food( { name: 'Nasi Uduk', tentang: 'Uduk enak yang nyummy' }, );

//     food.save().then((result) => { res.send(result) }).catch((err) => {res.send(err) })
// })

// Getting data in mongodb = json 
// router.get('/findall', (req,res) => {
//     Food.find().then((resp) => { res.send(resp) }).catch((err) => { res.send(err) })
// })

router.use((req,res) => {
    res.render('404' , { title: '404 ' })
})



module.exports = router;
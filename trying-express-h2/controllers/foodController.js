const Food = require('../models/food')

const food_index = (req,res) => {
    Food.find().then((data) => { 
        res.render('index', { title: 'Food', data })
    }).catch((err) => {
        console.log(err)
    })
}

const store_food = (req,res) => {
    // req body = request dari form

    const newFood = new Food(req.body)
    newFood.save().then((resp) => { res.redirect('/foods')}).catch((err) => { console.log(err) })
}

const detail_food = (req,res) => {
    const id = req.params.id

    Food.findById(id).then((resp) => {
        res.render('details_food', { foodsDetail: resp, title: 'Detail'})
    }).catch((error) => {
        console.log(error)
    })
}

const delete_food = (req,res) => {
    Food.findByIdAndDelete(req.params.id)
    .then(() => res.json(
        { redirect: '/' }))
    .catch((err) => { console.log(err)})
}

module.exports = {
    food_index,
    store_food,
    detail_food,
    delete_food
}
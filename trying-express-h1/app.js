const express = require('express')

const app = express()

// register view engine 
app.set('view engine', 'ejs')  // npm install ejs

app.get('/', (req,res) => {
    const data = [
        { title: "title 1", data: "content 1"},
        { title: "title 2", data: "content 2"},
        { title: "title 3", data: "content 3"},
    ]
    res.render('index',  {title: 'Blog ',data} )
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About'
    })
})

app.get('/about-me', (req,res) => {
    res.redirect('/about', {
        title: 'About'
    })
})

app.get('/blog/create', (req,res) => {
    res.render('create_blog', {
        title: 'Create Blog'
    } )
})

app.use((req,res) => {
    res.render('404' , {
        title: '404 '
    })
})

// listen to request
app.listen(3000)
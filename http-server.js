const fs  = require('fs')
const http = require('http')

const server = http.createServer((req,res) => {``
    console.log(req.url, req.method)
    res.setHeader('content-type', 'text/html');

    let url = './views/'

    switch(req.url) {
        case '/':
            url = url + 'index.html'
            res.statusCode = 200; // status error
        break;
        case '/about':
            url = url + 'about.html'
            res.statusCode = 200;
        break;
        case '/about-test':
            res.statusCode = 301 // redirect 
            res.setHeader('Location', '/about')
            res.end()
        default: 
            url += '404.html'
            res.statusCode = 404;
        break; 
    }

    fs.readFile(url, (err,data) => {
        if(err) {
            console.log(err)
             res.end()
        } else {
            // res.write(data)
            //  res.end()
             // or
             res.end(data)
        }
       
    })
    
})

server.listen(3000, 'localhost', () => {
    console.info('Request won')
})
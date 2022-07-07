const fs  = require('fs')
const http = require('http')

const server = http.createServer((req,res) => {``
    console.log(req.url, req.method)
    res.setHeader('content-type', 'text/html');

    fs.readFile('./views/index.html', (err,data) => {
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
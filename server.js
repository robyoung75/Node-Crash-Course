// node http module
const http = require('http');

// node fileSystem module
const fs = require('fs');

// installed locally; therefore we have the node modules folder. Never enter folder.
const _ = require('lodash');

// method that creates a server, call back runs everytime a request is made. 
// Request and response object parameters
// The call back will run and return info to browser.

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    // lodash example for a random number.
    // const num = _.random(0, 20);
    // console.log(num);  

    // set header content type
    res.setHeader('Content-Type', 'text/html');
    
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200; // 200 status code means ok.
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            path += 'about.html';
            res.statusCode = 301; // 301 means source removed redirect to a new page.
            res.setHeader('Location', '/about'); // redirects to /about
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404; // 400 status code means path not found.
            break;        
    }
    // send an html file to browser
    
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data); // if you are only writing one thing you can pass data directly into res.end(data).
            res.end();
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});


/// the below line is jsut for test
//console.log('test');

// home work for the first week of NodeJS 

const express = require('express');
const server = express(); 
const PORT = 8080; 
server.listen(PORT, () => { 
    console.log(`server is running on localhost: ${PORT}`)
}) 


// server.get('/', (req, res) => {  
//     res.send('Hello World! lest see if it is working')});


// // question1 
// // printing a variable specified in the route by the user and let us use About.

// server.get('/about', (req, res) => {  
//     res.send('Hello World! lest see if it is working with about')});

// // making it working with any variable in the route by the 

server.get("/:id ", (req, res) => {  
    res.send(req.params.id);
});

// // quetion 2
// server.get('/calculator/add', function (req, res) {
//     response = {
//       result: req.query.param1 + req.query.param2,
//    };
//    res.end(JSON.stringify(response));
// })
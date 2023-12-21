const express = require('express');  // import Express
const app = express();
app.use(express.json())  // Necessary to accept POST requests with a JSON body



app.get('/hello', sayHello);

function sayHello(req, res) {
    res.send('Hello!');
  }

// Endpoints go here

app.listen(4000, () => console.log('Server running on port 4000'));
import express = require('express');
import bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/dive-requests', (req, res) => {
    const obj = req.body.json();
    console.log(obj);
    res.status(200).send('Thank you for request');
    return;
});

const port = 8080;
app.listen(port, () => console.log(`http://localhost:${port}/`));

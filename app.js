const express = require('express')
const path = require('path')
const bodyParser= require('body-parser')
const cors= require('cors')
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors())
app.options('*', cors())

//
app.use(express.static(path.join(__dirname, 'public')));

//pour lancer le back-end
const port = 3001
app.listen(port,
    () => console.log(`app listening on port ${port}!`))
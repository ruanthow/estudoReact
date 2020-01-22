const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://Ruan:semanadeestudo@cluster0-utvwd.mongodb.net/test?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.use(express.json());
app.use(routes);


app.listen(8100);
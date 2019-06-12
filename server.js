const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();
app.set('viewengine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err)
            console.log(err);
    });
    next();
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

app.get('/', (req, res) => {
    res.send("Hello World!!!");
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'

    });
});

app.listen(3000, () => {
    console.log("Server is Up on Port 3000");
});
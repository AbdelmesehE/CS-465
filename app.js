const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();


// View Engine Setup

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');


// Register HBS Partials

hbs.registerPartials(
    path.join(__dirname, 'app_server', 'views', 'partials')
);


// Static Files

app.use(express.static(path.join(__dirname, 'public')));


// Routes

const indexRouter = require('./app_server/routes/index');

app.use('/', indexRouter);


// 404 Error Handler

app.use((req, res, next) => {
    res.status(404).render('404', {
        title: '404 Error'
    });
});


// 500 Error Handler

app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).render('500', {
        title: '500 Error'
    });
});


// Start Server

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
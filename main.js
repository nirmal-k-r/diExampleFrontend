const express=require('express');
const bodyParser=require('body-parser');


const app=express();
app.use(bodyParser.json());  // parse requests of content-type - application/json
app.use(bodyParser.urlencoded({ extended: true }));  // parse requests of content-type - application/x-www-form-urlencoded

// backendurl='http://localhost:3000';
backendurl='https://diexamplebackend.onrender.com'
//index page
app.get('/', (req,res) => {
    res.render('index.ejs', {backendurl: backendurl});
});


//login page
app.get('/login', (req,res) => {
    res.render('login.ejs', {backendurl: backendurl});
});


//register page
app.get('/register', (req,res) => {
    res.render('register.ejs', {backendurl: backendurl});
});


//journal individual page
app.get('/page', (req,res) => {
    res.render('page.ejs', {backendurl: backendurl});
});


const port=3001;
app.listen(port,'0.0.0.0', () => {
    console.log(`server listening on ${port}`);
});
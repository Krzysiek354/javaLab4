// import modułów wykorzystywanych do utworzenia serwera 
const express = require('express'); 
const path = require('path'); 
const bodyParser = require('body-parser'); 
const cookieParser = require('cookie-parser'); 
const flash = require('connect-flash'); 
const session = require('express-session'); 


const routes = require('./routes/index'); 






// obiekt serwer zwracany jako element modułu 
const app = express(); 
// definiowanie silnika dla generowania widoków (w tym przypadku pug) 
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'pug'); 
// definicja statycznych zasobów: strony, grafika czy style 
app.use(express.static(path.join(__dirname, 'public'))); 
// rozszerzenie funkcjonalności o nowe moduły 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
// wsparcie dla ciasteczek I sesji 
app.use(cookieParser()); 
app.use(session({ 
    secret: '"${process.env.CSRF_SECRET}"', 
    resave: false, 
    saveUninitialized: true, 
    cookie: {} 
})); 
// możliwość przesyłania informacji flash 
app.use(flash()); 
// zarządzanie trasami - dwustopniowo 
app.use('/', routes); 
// przesłanie konfiguracji 
module.exports = app;

app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});
app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});
app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

app.get('/kris', function (req, res) {
    res.send('<b>Hello</b> kris is the best');
});

//LAB 4 punkt 1
app.get('/nowy', function (req, res) {
    console.log('sciezka /nowy');
    let urii = new URL('http://localhost:8080/server1');
    res.redirect(urii.pathname);
});

app.get('/server1',function(req,res)
{
    console.log('sciezka /serwer1');
    res.send('sciezka server1');
});


///LAB 4 punkt 2
app.get('/witaj', function (req, res) {
    let addr = 'http://localhost:8080' + req.url;
    const url = new URL(addr);
    const searchParams = url.searchParams;
    let i = searchParams.get('imie');
    let n = searchParams.get('nazwisko');
    console.log(i);
    console.log(n);
    res.send('witaj'+'   ' + i +'   '+ n);
});



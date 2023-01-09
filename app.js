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


///LAB 4 punkt 3

app.get('/punkt3', function (req, res) {
  console.log("PUNKT 3 ZADANAIA LAB 4")
});


///LAB 4 punkt 4

app.get('/nowa', function (req, res) {
  
    res.write("Klient jest bardzo ważny, klient będzie podążał za klientem. Jutro postanawia się udekorować, bo najważniejsza jest czekolada. U nikogo nie ma leczenia. Wycena, pojazdy i element czasu, łatwy w użyciu. Mecenas zatruł ziemię strzałami, ani pracą domową, ani granicami. W rzeczywistości koniec kadencji nie zajmuje masy życia. Maecenas vitae sem at sem ultricies feugiat. W eleifend lorem in hate lacinia cartoon. Do tego czasu, z wyjątkiem ceny nieruchomości, cena nieruchomości nie jest ceną drożdży. Ale dobrze jest odrobić pracę domową. Zajęcia są odpowiednie dla cichych partnerów, którzy zwracają się ku brzegom poprzez nasze małżeństwa, poprzez projekty hymenejskie. Phasellus euismod eleifend ligula quis mattis");
    res.end();
  });

app.get('/stara', function (req, res) {
    res.write("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit ornare ipsum, vestibulum maximus enim scelerisque quis. In quis orci nulla. Morbi tellus sapien, vehicula eu tempor elementum, facilisis ut turpis. Maecenas venenatis sagittis eros, nec congue neque finibus vel. Nam tincidunt finibus quam, vitae volutpat massa suscipit nec. Maecenas vitae sem at sem ultricies feugiat. In eleifend lorem in odio lacinia viverra. Donec lorem nisi, mattis dictum pretium non, fermentum id ligula. Sed commodo ligula at congue rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus euismod eleifend ligula quis mattis.");
    res.end();
  });


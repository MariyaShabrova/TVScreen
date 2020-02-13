var express = require('express');
var exphbs  = require('express-handlebars');
const path = require("path");
const fs = require("fs");
const config = require('./config');
const sassMiddleware = require("node-sass-middleware");

 
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});

app.use (
    sassMiddleware({
      /* Options */
       src: path.join(__dirname, "scss"),
       dest: path.join(__dirname, "public/css/"),
     debug: false,
      outputStyle: "compressed",
      prefix: "/css"
     })
   );

   const port=3000; //(config.mode=="local") ? 3000 :80;
   app.use(express.static(path.join(__dirname, 'public')));
   
   app.listen(port);
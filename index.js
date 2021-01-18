const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/dosyalar/resimler')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
});
var upload = multer({ storage: storage });

app.use(bodyParser.urlencoded( {extended: true} ));
app.set("view engine" , "ejs");
app.use(express.static(__dirname + "/dosyalar"));
app.use(bodyParser.json());



var connection = mysql.createConnection({
  multipleStatements : true,
  host     : 'localhost',
  user     : 'root',
  password : '12344321',
  database : 'blog'
});

connection.connect(function(err){
  if(err) throw err;
  console.log("MYSQL'e bağlandı..");
});



app.get("/", function(req, res){

  app.render("anasayfa", {});
});


























let port = process.env.PORT;
if(port == "" || port == null){
  port = 5000;
}

app.listen(port, function(){
  console.log("port : " + port);
});

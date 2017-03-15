var express = require("express");
var bodyParser = require("body-parser");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8888;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/app.html');
});

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
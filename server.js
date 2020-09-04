var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var ingredients = [
    {
        "id":"100",
        "text":"Eggs"
    },
    {
        "id":"200",
        "text":"Milk"
    }
];

app.get('/', function (request, response) {
    response.send(ingredients);
});

app.post('/', function (request, response) {
    var ing = request.body;
    if (!ing || ing.text === ""){
        response.status(500).send({errpr: "Your ing must have text"});
    } else {
        ingredients.push(ing);
        response.status(200).send(ingredients);
    }
});

app.listen(3000, function () {
    console.log("First api running");
});

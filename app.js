const express = require("express");
const http = require("http");

const PORT = 5000;
const app = express();
const server = http.createServer(app)
server.listen(PORT,function(){
    console.log("Server in ascolto sulla porta: "+PORT);
    init();
})
function init(){
    //onload
}

/* ************************** SEZIONE 1 : Middleware ********************** */

//  Request log
app.use("/", function (req, res, next) {
    console.log(req.method + " : " + req.originalUrl);
    next();
});

// route risorse statiche
app.use("/", express.static('./client'));

// Bodyparser
app.use(express.json()) //For JSON requests
app.use(express.urlencoded({extended: true}));


// 6 - log dei parametri 
app.use("/", function (req, res, next) {
    if (Object.keys(req.query).length != 0)
        console.log("------> Parametri GET: " + JSON.stringify(req.query));
    if (Object.keys(req.body).length != 0)
        console.log("------> Parametri BODY: " + JSON.stringify(req.body));
    next();
});

/* ************************** SEZIONE 1 : Middleware ********************** */

//--//

/* ********************** CLIENT REQUEST  ************************ */





/* ********************** CLIENT REQUEST  ************************ */

//--//

/* ********************** DEFAULT ROUTE  ************************* */

// default route
app.use('/', function (req, res, next) {
    res.status(404)
    if (req.originalUrl.startsWith("/api/")) {
        res.send("Risorsa non trovata");
    }
    else res.send("paginaErrore");
});

// gestione degli errori
app.use(function (err, req, res, next) {
    console.log(err.stack);  // stack completo  
});

/* ********************** DEFAULT ROUTE  ************************* */

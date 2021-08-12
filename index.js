var express = require("express")
var bodyParser = require("body-parser")
var cookieParser = require('cookie-parser')
var app = express()
var ObjectId = require("mongodb").ObjectID
var sF = require("./backendJs/sharedFunctions.js")
const {
    response
} = require("express")
// var fs = require("fs").promises


app.use(bodyParser.urlencoded({
    extended: false
})) // enable req.body
app.use(express.static('public', {
    index: 'cardListMainMenu.html'
}))
app.use(cookieParser())

app.get("/card:cid", async function (req, res) {
    var num = Number(req.params.cid) - 1
    var db = sF.getCardDb()
    var toAdd = db[num]
    toAdd.reImg = toAdd.img
    if (num === 0) {
        toAdd.preCid = db[77].cid
        toAdd.preImg = db[77].img
    } else {
        toAdd.preCid = db[num - 1].cid
        toAdd.preImg = db[num - 1].img
    }
    if (num === 77) {
        toAdd.nextCid = db[0].cid
        toAdd.nextImg = db[0].img
    } else {
        toAdd.nextCid = db[num + 1].cid
        toAdd.nextImg = db[num + 1].img
    }

    console.log(toAdd);
    res.send(await sF.render('public/cardDetail.html', toAdd))
})

app.get("/major", async function (req, res) {
    res.send(await sF.render('public/cardListMajorArcana.html'))
})

var server = app.listen(3000)
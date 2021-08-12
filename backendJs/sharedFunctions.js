var fs = require("fs").promises
var MongoClient = require("mongodb").MongoClient
class Common {

    _dbo = null
    _cardDb=  null

    constructor() {
        var self = this
        MongoClient.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false", {
            useUnifiedTopology: true
        }, async function (err, client) {
            if (err) throw err
            self._dbo = client.db("tarotcarddb") // select the database
            console.log("Your game is ready, man!")
            self._cardDb = await self._dbo.collection("card").find({}).toArray()            
        })
    }

    getDb() {
        return this._dbo;
    }

    getCardDb(){
        return this._cardDb
    }

    async render(view, parts) {
        var data = await fs.readFile(view, 'utf-8')            
        if (parts !== undefined) {  
            for (const [key, value] of Object.entries(parts)) {
                data = data.replace("{" + key + "}", value)
            }
        }
        return data
    }
}

module.exports = new Common()
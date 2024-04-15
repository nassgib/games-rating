const fs = require("fs");
const { getRandomGame } = require("../appModules/api");

const gameRouteController = (res) => {
    fs.readFile("./dataset/rating.json", "utf-8", (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end("Internal Server Error");
            return;
        }
        const games = JSON.parse(data);
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(getRandomGame(games)));
        });
        };
        
module.exports = gameRouteController;

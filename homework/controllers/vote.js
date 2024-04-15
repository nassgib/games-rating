const {parseBody} = require("../appModules/http-utils");
const { createRating, updateRating } = require("../rating");
const { WEIGHT, PATH_TO_RATING_FILE } = require("../rating/config"); 
const fs = require("fs").promises;

const voteRouteController = async (req, res) => { 
  if (req.method !== "POST") {
  res.statusCode = 404;
  res.end("Not Found");
  return;
  }

  res.statusCode = 200;
  const body = await parseBody(req); 
  const data = JSON.parse(body);
  const rating = createRating (data, WEIGHT);

  const ratingFile = await fs.readFile(PATH_TO_RATING_FILE);
  const ratingArray = JSON.parse(ratingFile);
  const newRating = updateRating (ratingArray, data.id, rating);

  await fs.writeFile(PATH_TO_RATING_FILE, JSON.stringify(newRating)); 
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(newRating.sort((a, b) =>b.rating - a.rating)));
  }
module.exports = voteRouteController;
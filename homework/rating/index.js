const { PATH_TO_RATING_FILE } = require("./config");
const { makeRatingFile } = require("./rating-file");
const { createRating, updateRating } = require("./createRating")

module.exports = {
    makeRatingFile,
    PATH_TO_RATING_FILE,
    createRating,
    updateRating,
};
const fs = require("fs").promises;

const makeRatingFile = async (path, array) => {
  const ratingFile = await fs.readFile(path, "utf-8");
  const ratingArray = JSON.parse(ratingFile);

  array.forEach((games)  => {  
    if (!ratingArray.find((g) => g.id === games.id)) {
      const newGame = {
        id: games.id,
        title: games.title,
        image: games.image,
        link: games.link,
        description: games.description,
        rating: 0,
      };
      ratingArray.push(newGame);
    }
  });

  await fs.writeFile(path, JSON.stringify(ratingArray));
  console.log("Файл записан");
};
module.exports = {
    makeRatingFile,
}
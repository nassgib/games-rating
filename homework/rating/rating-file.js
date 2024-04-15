const fs = require("fs").promises;

const makeRatingFile = async (path, array) => {
  const ratingFile = await fs.readFile(path, "utf-8");
  const ratingArray = JSON.parse(ratingFile);

  array.forEach((item)  => {   /*посмотрите, пожалуйста, только ошибку, связанную с array.forEach. и если дальше ошибок много, я сама попробую их поисправлять (если получится)*/
    if (!ratingArray.find((g) => g.id === item.id)) {
      const newGame = {
        id: item.id,
        title: item.title,
        image: item.image,
        link: item.link,
        description: item.description,
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
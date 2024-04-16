const getData = async (url) => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

const getRandomGame = (games) => {
    const randomIndex = Math.floor(Math.random() * games.length)
    return games[randomIndex];
};

module.exports = {
    getData,
    getRandomGame,
};
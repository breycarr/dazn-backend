const axios = require("axios").default;

const getStandingsObject = async () => {
    const competitionsEndPoint = "https://makers.sd.dazn-dev.com/api/competitions"
    const response = await axios.get(competitionsEndPoint)
    const competitions = response.data.competition
    return competitions;
}

getStandingsObject()

module.exports = getStandingsObject;
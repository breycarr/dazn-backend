const getStandingsObject = require('../Standings')

describe('Standings', () => {
    it('should fetch competition name', () => {
        expect(getStandingsObject()).toEqual([{name: "Champions League"}, {name: "Premier League"}]);
    })
})
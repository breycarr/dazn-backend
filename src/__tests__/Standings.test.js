const getStandingsObject = require('../Standings')

describe('Standings', () => {
    it('should return an array', async () => {
        expect(await getStandingsObject()).toHaveProperty("length")
    })
    it('should fetch competition name', async () => {
        const result = await getStandingsObject()
        expect(result[0]).toHaveProperty("name")
    })
})
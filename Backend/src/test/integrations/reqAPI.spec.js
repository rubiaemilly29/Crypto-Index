const currentPrice = require("../../integrations/reqAPI")

describe('currentPrice', () => {
  it('Request ok', async() => {
      const res = await currentPrice() 
      expect(res.status).toBeGreaterThanOrEqual(200)
      expect(res.status).toBeLessThan(300);
      expect(res.message).toHaveProperty('bpi')
      expect(res.message).toHaveProperty('time')
      expect(res.message).toHaveProperty('disclaimer')
  })
  it('Bad request', () => {
    currentPrice().catch(e => {
      expect(e.status).toBeGreaterThanOrEqual(400)
      expect(e.status).toBeLessThan(500);
      expect(e.statusText).toBe("Not Found");
    })
  })
})

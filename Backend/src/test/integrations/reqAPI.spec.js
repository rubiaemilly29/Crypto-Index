const { currentPrice, currentPriceSpecific } = require("../../integrations/reqAPI")

describe('currentPrice', () => {
  it('Request ok', async() => {
      const res = await currentPrice() 
      expect(res.status).toBeGreaterThanOrEqual(200)
      expect(res.status).toBeLessThan(300);
      expect(res.message).toHaveProperty('bpi')
      expect(res.message).toHaveProperty('time')
      expect(res.message).toHaveProperty('disclaimer')
      expect(res.message).toHaveProperty('chartName')
  })
  it('Bad request', () => {
    currentPrice().catch(e => {
      expect(e.status).toBeGreaterThanOrEqual(400)
      expect(e.status).toBeLessThan(500);
      expect(e.statusText).toBe("Not Found");
    })
  })
})

describe('currentPriceSpecific', () => {
  describe('Request ok', () => {
    it('status ok', async () => {
      const res = await currentPriceSpecific('USD') 
      expect(res.status).toBeGreaterThanOrEqual(200)
      expect(res.status).toBeLessThan(300);
      expect(res.message).toHaveProperty('bpi')
      expect(res.message).toHaveProperty('time')
      expect(res.message).toHaveProperty('disclaimer')
    })
  })
  it('Bad request', () => {
    currentPriceSpecific().catch(e => {
      expect(e.status).toBeGreaterThanOrEqual(400)
      expect(e.status).toBeLessThan(500);
      expect(e.statusText).toBe("Not Found");
      expect(e.data).toBe('Sorry, your requested currency UND is not supported or is invalid')
    })
  })
})
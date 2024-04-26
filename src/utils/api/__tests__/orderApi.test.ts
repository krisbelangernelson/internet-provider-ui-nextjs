/**
 * @jest-environment node
 */

import { stripeConfig, stripePaymenIntent, createOrder } from '../orderApi'

const mockFetch = jest.fn()
jest.spyOn(global, 'fetch').mockImplementation(mockFetch)

describe('stripeConfig', () => {
  beforeEach(() => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => [],
      text: async () => '',
    })
  })

  afterEach(() => {
    mockFetch.mockClear()
  })

  it('should return a StripeConfig', async () => {
    const res = await stripeConfig()
    expect(res).toBeInstanceOf(Object)
  })

  it('should return an error when res.ok is false', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => [],
      text: async () => '',
    })
    const res = await stripeConfig().catch(e => e)
    expect(res).toBeInstanceOf(Error)
  })
})

describe('stripePaymenIntent', () => {
  beforeEach(() => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => [],
      text: async () => '',
    })
  })

  afterEach(() => {
    mockFetch.mockClear()
  })

  it('should return a StripeIntent', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ clientSecret: 'clientSecret', amount: '1' }),
    })
    const res = await stripePaymenIntent({ plan: 'test' })
    expect(res).toBeInstanceOf(Object)
    expect(res).toHaveProperty('clientSecret')
  })

  it('should return an error when res.ok is false', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => [],
      text: async () => '',
    })
    const res = await stripePaymenIntent({ plan: 'test' }).catch(e => e)
    expect(res).toBeInstanceOf(Error)
  })
})

describe('createOrder', () => {
  beforeEach(() => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => [],
      text: async () => '',
    })
  })

  afterEach(() => {
    mockFetch.mockClear()
  })

  it('should return an object with a code', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ code: '1' }),
      text: async () => '',
    })

    const res = await createOrder({
      offerId: 'test',
      line1: 'test',
      line2: null,
      city: '',
      state: '',
      country: '',
      postal_code: '',
    })
    expect(res).toBeInstanceOf(Object)
    expect(res).toHaveProperty('code')
  })

  it('should return an error when res.ok is false', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => [],
      text: async () => '',
    })
    const res = await createOrder({
      offerId: 'test',
      line1: 'test',
      line2: null,
      city: '',
      state: '',
      country: '',
      postal_code: '',
    }).catch(e => e)
    expect(res).toBeInstanceOf(Error)
  })
})

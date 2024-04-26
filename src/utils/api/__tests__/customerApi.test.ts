/**
 * @jest-environment node
 */

import { autoLoginCheck, customerExists, customerArea, logout, registerCustomer, loginCustomer } from '../customerApi'

const mockFetch = jest.fn()
jest.spyOn(global, 'fetch').mockImplementation(mockFetch)

describe('autoLoginCheck', () => {
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

  it('should return a CustomerResponse', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ id: '1' }),
      text: async () => '',
    })
    const res = await autoLoginCheck()
    expect(res).toBeInstanceOf(Object)
    expect(res).toHaveProperty('id')
  })

  it('should return an error when res.ok is false', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => [],
      text: async () => '',
    })
    const res = await autoLoginCheck().catch(e => e)
    expect(res).toBeInstanceOf(Error)
  })
})

describe('customerExists', () => {
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

  it('should return a CustomerExistsResponse', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ exists: true }),
      text: async () => '',
    })
    const res = await customerExists({
      email: 'test@test.com',
      phone: '5555555555',
    })
    expect(res).toBeInstanceOf(Object)
    expect(res).toHaveProperty('exists')
  })

  it('should return an error when res.ok is false', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => [],
      text: async () => '',
    })
    const res = await customerExists({
      email: 'test@test.com',
      phone: '5555555555',
    }).catch(e => e)
    expect(res).toBeInstanceOf(Error)
  })
})

describe('customerArea', () => {
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

  it('should return a CustomerArea', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ area: 'test' }),
      text: async () => '',
    })
    const res = await customerArea('test')
    expect(res).toBeInstanceOf(Object)
    expect(res).toHaveProperty('area')
  })

  it('should return an error when res.ok is false', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => [],
      text: async () => '',
    })
    const res = await customerArea('test').catch(e => e)
    expect(res).toBeInstanceOf(Error)
  })
})

describe('logout', () => {
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

  it('should return an object', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({}),
      text: async () => '',
    })
    const res = await logout()
    expect(res).toBeInstanceOf(Object)
  })

  it('should return an error when res.ok is false', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => ({}),
      text: async () => '',
    })
    const res = await logout().catch(e => e)
    expect(res).toBeInstanceOf(Object)
  })
})

describe('registerCustomer', () => {
  beforeEach(() => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({}),
      text: async () => '',
    })
  })

  afterEach(() => {
    mockFetch.mockClear()
  })

  it('should return an object', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({}),
      text: async () => '',
    })
    const res = await registerCustomer({
      email: 'test@test.com',
      phone: '5555555555',
      password: 'test',
      firstName: '',
      lastName: '',
    })
    expect(res).toBeInstanceOf(Object)
  })

  it('should return an error when res.ok is false', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => ({}),
      text: async () => '',
    })
    const res = await registerCustomer({
      email: 'test@test.com',
      phone: '5555555555',
      password: 'test',
      firstName: '',
      lastName: '',
    }).catch(e => e)
    expect(res).toBeInstanceOf(Error)
  })
})

describe('loginCustomer', () => {
  beforeEach(() => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({}),
      text: async () => '',
    })
  })

  afterEach(() => {
    mockFetch.mockClear()
  })

  it('should return an object', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({}),
      text: async () => '',
    })
    const res = await loginCustomer({
      email: 'test@test.com',
      password: 'test',
    })
    expect(res).toBeInstanceOf(Object)
  })

  it('should return an error when res.ok is false', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => ({}),
      text: async () => '',
    })
    const res = await loginCustomer({
      email: 'test@test.com',
      password: 'test',
    }).catch(e => e)
    expect(res).toBeInstanceOf(Error)
  })
})

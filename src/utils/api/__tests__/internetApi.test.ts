/**
 * @jest-environment node
 */
import { findAllServices } from '../internetApi'

const mockFetch = jest.fn()
jest.spyOn(global, 'fetch').mockImplementation(mockFetch)
mockFetch.mockResolvedValue({
  ok: true,
  status: 200,
  json: async () => [],
})

describe('findAllServices', () => {
  it('should return an array of services', async () => {
    const res = await findAllServices()
    expect(res).toBeInstanceOf(Array)
  })

  it('should return an error when res.ok is false', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => [],
    })
    const res = await findAllServices().catch(e => e)
    expect(res).toBeInstanceOf(Error)
  })
})

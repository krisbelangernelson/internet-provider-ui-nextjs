import { handleFetchError } from '../handleError'

describe('handleFetchError', () => {
  it('should throw error', () => {
    const error = '{"code":"1","message":"test"}'
    const statusText = 'test'
    const caller = 'test'
    expect(() => handleFetchError(error, statusText, caller)).toThrow('test')
  })

  it('should throw error for code !== 1', () => {
    const error = '{"code":"2","message":"test"}'
    const statusText = 'test'
    const caller = 'test'
    expect(() => handleFetchError(error, statusText, caller)).toThrow('API error, please contact support.')
  })
})

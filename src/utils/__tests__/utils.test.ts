import { normalizeInputPhone, keepDigits } from '@/utils/utils'

describe('normalizeInputPhone', () => {
  it('should return empty string', () => {
    expect(normalizeInputPhone('')).toEqual('')
  })

  it('should return unmodified value when length < 4>', () => {
    expect(normalizeInputPhone('123')).toEqual('123')
  })

  it('should return one hyphen modified value when length < 7>', () => {
    expect(normalizeInputPhone('123456')).toEqual('123-456')
  })

  it('should return two hyphen modified value when length >= 7>', () => {
    expect(normalizeInputPhone('1234567890')).toEqual('123-456-7890')
  })
})

describe('keepDigits', () => {
  it('should only keep digits', () => {
    expect(keepDigits('abc123')).toEqual('123')
  })
})

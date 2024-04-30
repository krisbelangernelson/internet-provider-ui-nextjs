import logger from '../logger'

describe('logger', () => {
  const spyConsoleError = jest.spyOn(console, 'error')
  const spyConsoleLog = jest.spyOn(console, 'log')
  const spyConsoleWarn = jest.spyOn(console, 'warn')

  it('should log error', () => {
    const error = new Error('test')
    logger.error(error, 'name')
    expect(spyConsoleError).toHaveBeenCalledWith(error, ' / caller: name')
  })

  it('should log info', () => {
    const info = 'test'
    logger.info('test', 'name')
    expect(spyConsoleLog).toHaveBeenCalledWith(info, ' / caller: name')
  })

  it('should log warn', () => {
    const warn = new Error('test')
    logger.warn(warn, 'name')
    expect(spyConsoleWarn).toHaveBeenCalledWith(warn, ' / caller: name')
  })
})

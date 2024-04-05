import logger from './logger'

export const handleFetchError = (error: string, statusText: string, caller?: string): void => {
  console.error('handleFetchError', error)
  let errObj
  try {
    errObj = JSON.parse(error)
    // Don't show user the error if it doesn't have code=1
    if (errObj.code !== '1') {
      throw new Error(errObj.message)
    }
  } catch (err) {
    logger.error(statusText, `Caller[${caller}]`)
    logger.error((err as Error).message)
    throw new Error('API error, please contact support.')
  }

  // Show the API returned error to the user
  throw new Error(errObj.message)
}

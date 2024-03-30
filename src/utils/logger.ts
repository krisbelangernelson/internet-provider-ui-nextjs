const logger = {
  error: (message: Error | object | string, caller?: string) => {
    console.error(message, ` / caller: ${caller}`) // eslint-disable-line no-console
  },
  info: (message: object | string, caller?: string) => {
    console.log(message, ` / caller: ${caller}`) // eslint-disable-line no-console
  },
  warn: (message: Error | object | string, caller?: string) => {
    console.warn(message, ` / caller: ${caller}`) // eslint-disable-line no-console
  },
}

export default logger

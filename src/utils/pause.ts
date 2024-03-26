export default function pauseFunction(delay: number) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Done!')
    }, delay)
  })
  return promise
}

export const findAllServices = async () => {
  const res = await fetch(`${process.env.INTERNET_API}/internet-services`)

  if (!res.ok) {
    console.error('Failed to GET findAll for internetApi')
    throw new Error('API error')
  }

  return res.json()
}

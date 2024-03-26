export const findAllServices = async () => {
  const res = await fetch(`${process.env.INTERNET_API}/internet-services`)

  if (!res.ok) {
    throw new Error('Failed to GET findAll for internet-services')
  }

  return res.json()
}

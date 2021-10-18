import Client from './api'

export const CreatePortfolio = async data => {
  const res = await Client.post('/portfolio/create', data)
  return res.data
}

export const CreateImage = async data => {
  const res = await Client.post('/image/create', data)
  return res.data
}

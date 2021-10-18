const { Image, Portfolio } = require('../models')

const GetAllImages = async (req, res) => {
  try {
    const data = await Image.findAll()
    res.send(data)
  } catch (error) {
    throw error
  }
}

const CreateImage = async (req, res) => {
  try {
    const result = await Image.create({
      ...req.body,
      settings: {}
    })
    res.send(result)
  } catch (error) {
    throw error
  }
}

//needs an update controller too.

//also delete

const FindImageById = async (req, res) => {
  try {
    const data = await Image.findOne({
      where: { id: req.params.id }
    })
    res.send(data)
  } catch (error) {
    throw error
  }
}

const FindImagesByPortfolioId = async (req, res) => {
  try {
    const data = await Image.findAll({
      where: { portfolioId: req.params.portfolio_id }
    })
    res.send(data)
  } catch (error) {
    throw error
  }
}

const FindImagesByUserId = async (req, res) => {
  try {
    const port = await Portfolio.findOne({
      where: { id: req.params.user_id }
    })
    const data = await Image.findAll({
      where: { portfolioId: port.id }
    })
    res.send(data)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllImages,
  CreateImage,
  FindImageById,
  FindImagesByPortfolioId,
  FindImagesByUserId
}

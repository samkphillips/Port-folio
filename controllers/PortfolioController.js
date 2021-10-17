const { Portfolio } = require('../models')
// const Sequelize = require('sequelize')
// const Op = Sequelize.Op

const GetAllPortfolios = async (req, res) => {
  try {
    const data = await Portfolio.findAll()
    res.send(data)
  } catch (error) {
    throw error
  }
}

const CreatePortfolio = async (req, res) => {
  try {
    const result = await Portfolio.create({
      title: '',
      description: '',
      settings: {},
      userId: req.body.user_id
    })
    res.send(result)
  } catch (error) {
    throw error
  }
}

//needs an update controller too.

//also delete

const FindPortfolioById = async (req, res) => {
  try {
    const data = await Portfolio.findOne({
      where: { id: req.params.id }
    })
    res.send(data)
  } catch (error) {
    throw error
  }
}

const FindPortfolioByUserId = async (req, res) => {
  try {
    const data = await Portfolio.findOne({
      where: { id: req.params.user_id }
    })
    res.send(data)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllPortfolios,
  CreatePortfolio,
  FindPortfolioById,
  FindPortfolioByUserId
}

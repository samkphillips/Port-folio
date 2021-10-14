const { User } = require('../models')
//not sure if I need Op
// const Sequelize = require('sequelize')
// const Op = Sequelize.Op

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers
  //more to come
}

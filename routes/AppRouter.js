const router = require('express').Router()
const UserRouter = require('./UserRouter')
const PortfolioRouter = require('./PortfolioRouter')
// const ImageRouter = require('./ImageRouter')

router.use('/user', UserRouter)
router.use('/portfolio', PortfolioRouter)
// router.use('/image', ImageRouter)

module.exports = router

const router = require('express').Router()
const controller = require('../controllers/PortfolioController')
const middleware = require('../middleware')

router.get('/all', controller.GetAllPortfolios)
router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreatePortfolio
)
// router.put(
//   '/updateportfolio',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.ChangePassword
// )
// router.delete(
//   '/deleteportfolio',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.DeleteUserAccount
// )
router.get('/byId/:id', controller.FindPortfolioById)
router.get('/byUserId/:user_id', controller.FindPortfolioByUserId)

module.exports = router

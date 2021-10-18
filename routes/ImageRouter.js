const router = require('express').Router()
const controller = require('../controllers/ImageController')
const middleware = require('../middleware')

router.get('/all', controller.GetAllImages)
router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateImage
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
router.get('/byId/:id', controller.FindImageById)
router.get('/byPortfolioId/:portfolio_id', controller.FindImagesByPortfolioId)
router.get('/byUserId/:user_id', controller.FindImagesByUserId)

module.exports = router

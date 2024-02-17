const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const { validateLogin , validateRegister , validateUpdateProfile , validateUpdateSecurity} = require('../middleware/validateMiddleware')

router.post('/register' ,validateRegister ,userController.register)
router.get('/me' ,authMiddleware,userController.getMe)
router.post('/login' ,validateLogin ,userController.login)
router.put('/account' ,authMiddleware , validateUpdateProfile ,userController.updateProfile) 
router.put('/security' ,authMiddleware  , validateUpdateSecurity ,userController.updateSecurity) 

module.exports = router  
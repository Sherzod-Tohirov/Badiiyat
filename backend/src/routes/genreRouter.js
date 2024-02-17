const Router = require('express')
const router = new Router()
const genreController = require('../controllers/genreController')

router.get('/'  ,genreController.getAllGenre)


module.exports = router
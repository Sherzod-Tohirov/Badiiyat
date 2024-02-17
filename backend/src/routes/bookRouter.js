const Router = require('express')
const router = new Router()
const bookController = require('../controllers/bookController')
const { validateBook } = require('../middleware/validateMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/'  ,authMiddleware , validateBook , bookController.createBook)
router.get('/genreId/:id'  ,bookController.getBookByGenreId)
router.get('/bookId/:id' , authMiddleware ,bookController.getBookById)
router.get('/search'  ,bookController.getBookByQuery)
router.delete('/:id'  ,bookController.deleteBook)


module.exports = router
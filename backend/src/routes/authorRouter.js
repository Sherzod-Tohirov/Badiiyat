const Router = require('express')
const router = new Router()
const authorController = require('../controllers/authorController')
const { validateAuthor} = require('../middleware/validateMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/' ,authMiddleware ,validateAuthor ,authorController.createAuthor)
router.get('/genreId/:id'  ,authorController.getAuthorByGenreId)
router.get('/books/:id' ,authMiddleware  ,authorController.getAuthorBooks)
router.get('/authorId/:id' ,authMiddleware ,authorController.getAuthorById)
router.get('/search/'  ,authorController.getAuthorByQuery)
router.delete('/:id'  ,authorController.deleteAuthor)


module.exports = router
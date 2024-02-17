const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const authorRouter = require('./authorRouter')
const bookRouter = require('./bookRouter')
const swaggerRouter = require('./swagger')
const genreRouter = require('./genreRouter')

router.use('/user' , userRouter)
router.use('/genre' , genreRouter)
router.use('/book' , bookRouter)
router.use('/author' , authorRouter)
router.use('/api-docs' , swaggerRouter)


module.exports = router
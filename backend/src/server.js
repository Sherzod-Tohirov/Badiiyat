require('dotenv').config()
const express  = require('express')
const cors = require('cors')
const router = require('./routes')
const fileupload = require("express-fileupload")
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileupload())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(router)

app.use(errorHandler)


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()
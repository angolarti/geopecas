import express from "express"

import { router } from "./api/products.js"


const app = express()
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '127.0.0.1'

app.use('/', router)

app.listen(PORT, HOST, () => {
    console.log(`Server starting on http:${HOST}:${PORT}`)
})



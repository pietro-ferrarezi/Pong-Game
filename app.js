const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

const views = path.join(__dirname, 'views/')
const public = path.join(__dirname, 'public/')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(public))

app.get("/", (req, res) => {
    res.sendFile(path.format({ root: "/", dir: views, base: "index.html"}))
})

app.listen(PORT, () => console.log(`Server running! http://localhost:${PORT}`))
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(router)

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
}) 

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({ error: error.message })
})

const port = process.env.PORT || 3333

app.listen(port, () => console.log('Server running at port', port))

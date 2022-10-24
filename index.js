const express = require('express')
const cors = require('cors')

const app = express()
const port =process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('travel master is a Home page' )
})

app.get('/hotels', (req, res) => {
  res.send(require('./data/hotels.json'))
})

// app.get(`/hotels${id}`, (req, res) => {
//   res.send(require('./data/hotels.json'))
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
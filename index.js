const express = require('express')
const cors = require('cors')

const app = express()
const port =process.env.PORT || 5000

const hotels = require('./data/hotels.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('travel master is a Home page' )
})

app.get('/hotels', (req, res) => {
  res.send(hotels)
})

app.get(`/hotel/:id`, (req, res) => {
  const id = req.params.id;
  const hotel = hotels.find(ht => ht.id === id)
  res.send(hotel)
  console.log(id, 'id', hotel);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
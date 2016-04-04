'use strict'

const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  // Send JSON
  res.send({ status: 'on' })
})

let bears = []
//let index = 0

//EXAMPLE: POST http://localhost:3000/bears?bear1=juan&bear2=jose
app.post('/bears', (req, res) => {
  // Send JSON
  for(var key in req.query){
    bears.push(req.query[key])
    //bears[index] = req.query[key]
    //index++
  }

  res.send(`Your bears are ${bears}`)
})

app.get('/bears', (req, res) => {
  // Send JSON
  console.log(req.query)
  res.send({ bears })
})

module.exports = app

require('dotenv').config()
const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

if (process.env.NODE_ENV === 'production') {
  console.log('this means this code is deployed')
}

const PORT = process.env.PORT || 5000

console.log('port is -> ', PORT)

server.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'Test working' })
})

server.get('*', (req, res) => {
  res.status(200).json({ message: 'Server working' })
})

server.use((req, res) => {
  res.status(404).json({ message: 'not found sorry' })
})

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})


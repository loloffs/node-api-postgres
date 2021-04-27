const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/', (req, res) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
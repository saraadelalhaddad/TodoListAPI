const express = require('express')
const todos = require('./todos')
const cors = require('cors')
const bodyParser = require('body-parser')
const todosRouter = require('./routes/todos')
const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use('/todos', todosRouter)
app.get('/todos', (req, res) => {
  res.json(todos)
})

app.listen(8000, () => {
  console.log('The application is running')
})

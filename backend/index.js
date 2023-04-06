const connectToMongo = require('./db');
const express = require('express')
connectToMongo();


const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('hello vishal how are you')
// })

// app.get('/api/v1/signup', (req, res) => {
//   res.send('hello signup')
// })

// app.get('/api/v1/login', (req, res) => {
//   res.send('hello login')
// })

app.use(express.json())
 
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
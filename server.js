const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const items = require('./routes/api/items')
const app = express()

// bodyparser middleware
app.use(bodyParser.json())

// DB config
const db = require('./config/keys.js').mongoURI

// connect to Mongo DB
mongoose.connect(db)
    .then(() => console.log('DB connected...'))
    .catch(()=> console.log(err))


// use routes
app.use('/api/items', items)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const port = process.env.port || 5000

app.listen(port, () => console.log('Server start at port ' + port))
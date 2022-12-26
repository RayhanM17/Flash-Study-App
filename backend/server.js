const path = require('path')
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const baseURL = process.env.BASE_URL || "http://localhost:3000"

const app = express();

// Enable body parser
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", baseURL); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/openai', require('./routes/openaiRoutes'))

// Serve Frontend
if(process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) => res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html'))
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API'})
  })
}

app.listen(port, () => console.log(`Server started on port ${port}`))
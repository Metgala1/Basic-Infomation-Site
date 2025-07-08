const express = require('express');
const { request } = require('http');
const path = require('path');

const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 2020;

app.get(['/', '/index'], (request, response) => {
  response.sendFile(path.join(__dirname, 'index.html'));

})
app.get('/about', (request, response) => {
  response.sendFile(path.join(__dirname, 'about.html'))
})

app.get('/contact-me', (request, response) => {
  response.sendFile(path.join(__dirname, 'contact-me.html'))
})
app.use(express.static(path.join(__dirname)));

app.use((request,response) => {
  response.status(404).sendFile(path.join(__dirname, '404.html'))
})

app.listen(PORT, () => {
  console.log(`Server now running on localhost ${PORT}`)
})
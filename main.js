const express = require('express')
const path = require('path')

const app = express();
const port = process.env.PORT || 3000;

// SENDFILE will go here

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
})
app.get('/EDUCATION.html', (req, res) => {
    res.sendFile(path.join(__dirname,'EDUCATION.html'));
  })

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname,'about.html'));
  })

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname,'contact.html'));
  })

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
  })

app.use('/static', express.static(path.join(__dirname,'media')));


app.listen(port, () => {
  console.log('Up')
})
const express = require(`express`)
const app = express()
const mongoose = require(`mongoose`)
var User = require('./userModel.js')

mongoose.connect('mongodb://localhost:27017/grama', { useNewUrlParser: true });

app.get(`/`, (req, res) => {
  res.send(`Ola grama`)
})

app.post(`/user`, (req, res) => {
  const user = new User({ name: 'Bruno', age: 28 })
  user.save().then(() => {
    res.send(user)
  })
})

app.get(`/user`, (req, res) => {
  User.find({}, (err, users) => {
    if (err) console.error(err)
    res.send(users)
  })
})

app.listen(3000)
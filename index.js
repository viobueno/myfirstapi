const express = require(`express`)
const mongoose = require(`mongoose`)

mongoose.connect('mongodb://localhost:27017/firstapi', {useNewUrlParser: true});

// Works


const app = express()

app.get(`/`, (req, res) => {
    res.send(`Ola grama`)
})

app.post(`/user`, (req, res) => {
    // Create a new mongoose model
    const userSchema = new mongoose.Schema({ name: String }, { age: Number });
    var UserModel = mongoose.model('User', userSchema);
    var user = new UserModel({name: `bruno`, age:28})
    user.save(function (err) {
        if (err) return handleError(err);
        res.send(`usuario salvo com sucesso ${user._id}`)
      });
})

app.get(`/user`, (req,res) => {
    var UserModel = mongoose.model('User', userSchema);
    UserModel.find({}, (err, users) => {
        res.send(users)
    });
})

app.listen(3000)
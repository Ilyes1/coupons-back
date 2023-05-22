const User = require('../models/userSchema')
const bcrypt = require('bcrypt')



// SIGNUP USER
const signup = (req, res) => {
    let password = req.body.password

    User.findOne({username: req.body.username})
    .then((user) => {
        if (user) {res.status(404).json({message: 'Username already exists'})}
        else {
            bcrypt.hash(password, 10, (err, data) => {
                    if (err) throw err
                    const user = new User({
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        username: req.body.username,
                        email: req.body.email,
                        phone: req.body.phone,
                        password: data,
                        type: req.body.type,
                        status: 'NA',
                })
                user.save()
                .then(() => console.log('saved'))
                .catch((err) => console.log(err))
            })
            res.status(201).json({message: 'Signed up Successfully'})
        }
    })
    .catch((err) => console.log(err))

}


// LOGIN USER
const login = (req, res) => {
    User.findOne({username: req.body.username})
    .then((user) => {
        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (result) {
                    res.status(201).json({ uid: user._id, username: user.username })
                } else {
                    res.status(401).json({ message: 'Password incorrect' })
                }
            })
        } else {
            res.status(404).json({message: 'User not found'})
        }
    })
}


const getSellers = (req, res) => {
    User.find({type: ['SELLER', 'BUYER_SELLER']})
    .then((sellers) => res.json(sellers))
    .catch((err) => console.log(err))
}

const getBuyers = (req, res) => {
    User.find({type: ['BUYER', 'BUYER_BUYER']})
    .then((buyers) => res.json(buyers))
    .catch((err) => console.log(err))
}

const updateStatus = (req, res) => {
    User.updateOne({username: req.body.username}, {status: req.body.status})
    .then(() => console.log('updated'))
    .catch((err) => console.log(err))
}

const deleteUser = (req, res) => {
    User.deleteOne({username: req.params.username})
    .then(() => console.log('deleted'))
    .catch((err) => console.log(err))
}


module.exports = { getSellers, getBuyers, updateStatus, deleteUser, signup, login }
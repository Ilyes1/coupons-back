const Coupon = require('../models/Coupon')

const getUserCodes = (req, res) => {
    Coupon.find({user: req.params.user})
    .then((response) => res.json(response))
    .catch((err) => console.log(err))
}

getEventCodes = (req, res) => {
    Coupon.find({event: req.params.event})
    .then((response) => res.json(response))
    .catch((err) => console.log(err))
}

const addCode = (req, res) => {
    const coupon = new Coupon({
        user: req.body.user,
        event: req.body.event,
        quantity: req.body.quantity,
        price: req.body.price,
        account: req.body.account,
        password: req.body.password,
        code: req.body.code
    })

    coupon.save()
    .then(() => res.status(200).json({message: 'Coupon added successfully'}))
    .catch((err) => res.status(400).json(err))
}

const deleteCode = (req, res) => {
    Coupon.deleteOne({_id: req.params.id})
    .then(() => res.status(201).json({message: 'Code deleted'}))
    .catch((err) => res.status(403).json(err))
}


module.exports = { getUserCodes, addCode, deleteCode, getEventCodes }
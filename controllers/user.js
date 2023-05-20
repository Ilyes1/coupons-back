const User = require('../models/User')

const getSellers = (req, res) => {
    User.find({type: 'SELLER'})
    .then((sellers) => res.json(sellers))
    .catch((err) => res.send(err))
}

module.exports = { getSellers }
const Answers = require('../models/answers')

const addAnswers = (req, res) => {
    const answers = new Answers({
        name: req.body.name,
        email: req.body.email,
        broker_experience: req.body.broker_experience,
        how_did_you_hear: req.body.how_did_you_hear,
        refer_by: req.body.refer_by
    })
    answers.save()
    .then(() => res.status(200).json({message: 'Answers saved'}))
    .catch((err) => res.status(400).json(err))
}

const getAnswers = (req, res) => {
    Answers.find({})
    .then(response => res.status(200).json(response))
    .catch(err => res.status(400).json(err))
}

const deleteAnswers = (req, res) => {
    Answers.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({message: 'Answers deleted'}))
    .catch((err) => res.status(400).json(err))
}

module.exports = { addAnswers, getAnswers, deleteAnswers }
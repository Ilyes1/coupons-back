const Answers = require('../models/answers')
const nodemailer = require('nodemailer');

const addAnswers = (req, res) => {
    const answers = new Answers({
        name: req.body.name,
        email: req.body.email,
        broker_experience: req.body.broker_experience,
        how_did_you_hear: req.body.how_did_you_hear,
        refer_by: req.body.refer_by,
        status: 'Pending'
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

const updateAnswer = (req, res) => {
    Answers.updateOne({_id: req.body.id}, {status: req.body.status})
    .then(() => res.status(200).json({message: 'Status updated'}))
    .catch((err) => res.status(400).json(err))
}



// Create a transporter object using your email service provider's SMTP settings
const sendMail = (req, res) => {
    // const email = req.body.email
    // const name = req.body.name

    var transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
        user: 'ihannouch88@gmail.com',
        pass: 'Ilyes123',
        },
    });
  
    // Define the email message
    var mailOptions = {
        from: 'ihannouch88@gmail.com',
        to: 'ihannouch7@gmail.com',
        subject: 'Coupons Website',
        text: 'This is the email content.',
    };
    
    // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
            console.log('Error occurred while sending email:', error);
            } else {
            console.log('Email sent successfully:', info.response);
            }
        });
    }

module.exports = { addAnswers, getAnswers, deleteAnswers, updateAnswer, sendMail }
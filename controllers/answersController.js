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

    const email = req.body.email
    const name = req.body.name

    var transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
        user: 'ihannouch88@gmail.com',
        pass: 'Ilyes123',
        },
    });
  
    // Define the email message
    var approveOptions = {
        from: 'ihannouch88@gmail.com',
        to: email,
        subject: 'Application Approved - Welcome to Our Platform!',
        html: `
            <p>Dear ${name}</p>
            <p>We are thrilled to inform you that your application to join our platform has been approved! Congratulations, and welcome aboard! We appreciate your interest and are excited to have you as a part of our community.</p>
            <p>To complete the registration process, please click on the following link to sign up:</p>
            <p><a href="https://coupons1.netlify.app/signup">https://coupons1.netlify.app/signup</a></p>
            <p>Once again, congratulations on your application approval! We look forward to welcoming you to our platform.</p>
        `,
    };

    var disapproveOptions = {
        from: 'ihannouch88@gmail.com',
        to: email,
        subject: 'Application Status - Update',
        html: `
            <p>Dear ${name}</p>
            <p>Thank you for your interest in our platform and for submitting your application. We appreciate the time and effort you invested.</p>
            <p>After careful review, we regret to inform you that your application was not approved at this time. We want to assure you that this decision was made after thorough consideration, taking into account various factors.</p>
            <p>We appreciate your understanding and thank you for considering our platform. Should there be any updates or changes in the future, we will notify you accordingly.</p>
        `,
    };

    Answers.updateOne({_id: req.body.id}, {status: req.body.status})
    .then(() => {
        if (req.body.status == 'Approved') {
            transporter.sendMail(approveOptions, (error, info) => {
                if (error) {
                    res.status(400).json(error);
                } else {
                    res.status(200).json({message: 'Email sent!'});
                }
            });
        } else {
            transporter.sendMail(disapproveOptions, (error, info) => {
                if (error) {
                    res.status(400).json(error);
                } else {
                    res.status(200).json({message: 'Email sent!'});
                }
            });
        }
    })
    .catch((err) => res.status(400).json(err))
    
    
    
    // Send the email
    
}

module.exports = { addAnswers, getAnswers, deleteAnswers, updateAnswer }
const Event = require('../models/eventSchema')

const getEvents = (req, res) => {
      Event.find()
      .then((events) => res.status(200).json(events))
      .catch((err) => res.status(400).send(err))
};


const addEvent = (req, res) => {
    const event = new Event({
        name: req.body.name,
        location: req.body.location,
        event_date: req.body.event_date,
        on_sale_date: req.body.on_sale_date,
        code_type: req.body.code_type,
        image_url: req.body.image_url
    })
    
    event.save()
    .then(() => res.status(200).json('Event saved'))
    .catch((err) => res.status(400).json(err))
}

const updateEvent = (req, res) => {
    Event.updateOne({'_id': req.body.id}, {
        name: req.body.name,
        location: req.body.location,
        event_date: req.body.event_date,
        on_sale_date: req.body.on_sale_date,
        code_type: req.body.code_type,
        image_url: req.body.image_url
    })
    .then(() => res.status(200).json('Event updated'))
    .catch((err) => res.status(400).json(err))
}

const deleteEvent = (req, res) => {
    Event.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json('Event deleted'))
    .catch((err) => res.status(400).json(err))
}

module.exports = { getEvents, addEvent, updateEvent, deleteEvent }
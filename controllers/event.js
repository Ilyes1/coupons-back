const Event = require('../models/Event')

const getEvents = (req, res) => {
      Event.find()
      .then((events) => res.json(events))
      .catch((err) => res.send(err))
};


const addEvent = (req, res) => {
    const event = new Event({
        name: req.body.name,
        location: req.body.location,
        event_date: req.body.event_date,
        on_sale_date: req.body.on_sale_date,
        code_type: req.body.code_type
    })
    
    event.save()
    .then(() => console.log('saved'))
    .catch((err) => console.log(err))
}

const updateEvent = (req, res) => {
    Event.updateOne({'_id': req.body.id}, {
        name: req.body.name,
        location: req.body.location,
        event_date: req.body.event_date,
        on_sale_date: req.body.on_sale_date,
        code_type: req.body.code_type,
    })
    .then(() => console.log('updated'))
    .catch(err => console.log(err))
}

const deleteEvent = (req, res) => {
    Event.deleteOne({_id: req.params.id})
    .then(() => console.log('deleted'))
    .catch((err) => console.log(err))
}

module.exports = { getEvents, addEvent, updateEvent, deleteEvent }
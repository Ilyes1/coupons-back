const express = require('express')
const mongoose = require('mongoose')
const EventController = require('./controllers/event');
const UserController = require('./controllers/user');
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://ilyes:Ilyes123@cluster0.mtghl.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected...')
})
.catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.send('Hellllllll no')
})

app.get('/events', EventController.getEvents)

app.get('/events/add', EventController.addEvent)

app.post('/events/update', EventController.updateEvent)

app.get('/users/sellers', UserController.getSellers)

app.listen(process.env.PORT || 5000)
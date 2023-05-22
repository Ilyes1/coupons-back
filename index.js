const express = require('express')
const mongoose = require('mongoose')
// const EventController = require('./controllers/eventController');
const UserController = require('./controllers/userController');
// const userRoutes = require('./routes/user');
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

app.post('/signup', UserController.signup)

app.post('/login', UserController.login)

// app.get('/events', EventController.getEvents)

// app.post('/events/add', EventController.addEvent)

// app.post('/events/update', EventController.updateEvent)

// app.delete('/events/delete/:id', EventController.deleteEvent)

app.get('/users/sellers', getSellers)

app.get('/users/buyers', UserController.getBuyers)

app.post('/users/update', UserController.updateStatus)

app.delete('/users/delete/:username', UserController.deleteUser)


app.listen(process.env.PORT || 5000)
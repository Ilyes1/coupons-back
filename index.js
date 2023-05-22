const express = require('express')
const mongoose = require('mongoose')
const EventUser = require('./controllers/eventUser');
// const UserController = require('./controllers/userController');
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

// app.post('/signup', EventUser.signup)

// app.post('/login', EventUser.login)

app.get('/events', EventUser.getEvents)

app.post('/events/add', EventUser.addEvent)

app.post('/events/update', EventUser.updateEvent)

app.delete('/events/delete/:id', EventUser.deleteEvent)

// app.get('/users/sellers', EventUser.getSellers)

// app.get('/users/buyers', EventUser.getBuyers)

// app.post('/users/update', EventUser.updateStatus)

// app.delete('/users/delete/:username', EventUser.deleteUser)


app.listen(process.env.PORT || 5000)
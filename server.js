const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path');
const app = express();

const db = require('./config/keys').mongoURI;

const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const users = require('./routes/api/users');

//Passport Middlewares
app.use(passport.initialize());
 //Passport config
 require('./config/passport')(passport)

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use('/api/posts', posts)
app.use('/api/profile', profile)
app.use('/api/users', users)

if (process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'));
      
        app.get('*', (req, res) => {
          res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
      }

mongoose.connect(db,{ useNewUrlParser: true })
        .then(() => console.log("Connected to the Database..."))
        .catch(err => console.log(err));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Server running on port',port));

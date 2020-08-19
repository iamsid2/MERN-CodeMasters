const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path');
const app = express();

const db = require('./config/keys').mongoURI;

const profile = require('./routes/api/profile');
const users = require('./routes/api/users');
const project = require('./routes/api/project');

//Passport Middlewares
app.use(passport.initialize());
 //Passport config
 require('./config/passport')(passport)

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use('/api/profile', profile)
app.use('/api/users', users)
app.use('/api/project', project)

if (process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'));
      
        app.get('*', (req, res) => {
          res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
      }

mongoose.connect(db,{ useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
        .then(() => console.log("Connected to the Database..."))
        .catch(err => console.log(err));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Server running on port',port));

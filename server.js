const express = require('express');
const mongoose = require('mongoose');
const app = express();

const db = require('./config/keys').mongoURI;

const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const users = require('./routes/api/users');

app.get('/', (req,res) => {
  res.send("Hello World!!!")
});

app.use('/api/posts', posts)
app.use('/api/profile', profile)
app.use('/api/users', users)

mongoose.connect(db,{ useNewUrlParser: true })
        .then(() => console.log("Connected to the Database..."))
        .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running on port',port));

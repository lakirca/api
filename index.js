const mongoose = require('mongoose');
const users = require('./routes/users');
const tokens = require('./routes/tokens');
const presale = require('./routes/total_presale');
const express = require('express');
const app = express();
var cors = require('cors')
 
app.use(cors())

// mongoose.connect('mongodb://trybePresaleUser:5yU3FO1oXGr8@dev.wallet.trybe.one:27017/trybePresale')
mongoose.connect('mongodb://127.0.0.1/my_database', {useNewUrlParser: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error(err));

app.use(express.json());
app.use('/api/users', users);

app.use('/api/tokens', tokens);

app.use('/api/presale', presale);

const port = process.env.PORT || 8443;
app.listen(port, () => console.log(`Listening on port ${port}...`));


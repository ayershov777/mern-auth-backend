const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true
});

mongoose.connection.on('connected', () => console.log('mongoose connected to atlas'));

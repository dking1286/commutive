const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/commutive');

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', () => {
  console.error('Connection error');
});

const userSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  password: String,
  hourlyPay: Number,
  commuteTime: Number,
  commuteDistance: Number,
});

const User = mongoose.model('users', userSchema);

module.exports = User;

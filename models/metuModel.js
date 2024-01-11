const mongoose = require('mongoose');
const metuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A metu must have a name'],
    unique: true,
  },
  color: String,
  day: String,
  number: Number,
  planet: String,
});
const Metu = mongoose.model('Metu', metuSchema);

module.exports = Metu;

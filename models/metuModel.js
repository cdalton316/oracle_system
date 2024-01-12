const mongoose = require('mongoose');
const metuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A metu must have a name'],
    unique: true,
  },
  sphere: {
    type: String,
  },

  color: { type: String },
  day: { type: String },
  number: { type: Number },
  planet: { type: String },
  gems: { type: String },
  timeOfYear: { type: String },
  esotericHerbalism: { type: String },
  hekau: { type: String },
  spiritualDirection: { type: String },
  mundaneDirection: { type: String },
  personalityPortfolio: {
    type: String,
    personalityTraits: String,
    emotionalTraits: String,
    mentalTraits: String,
  },
  socialCorrespondences: {
    type: String,
    careersFunctions: String,
  },
  spiritualPortfolio: { type: String },
  keyPhrases: { type: String },
  biologicalCorrespondences: { type: String },
  pathology: { type: String },
  kamiticTheraputics: { type: String },
  chineeseMedice: { type: String },
  spiritualkeynotes: { type: String },
  spiritualCounsel: { type: String },
});
const Metu = mongoose.model('Metu', metuSchema);

module.exports = Metu;

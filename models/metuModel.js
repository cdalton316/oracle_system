const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
const metuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A metu must have a name'],
    unique: true,
    names: [
      { kamitic: String },
      { canaanite: String },
      { kabalistical: String },
      { yoruba: String },
      { indusKush: String },
    ],
  },
  slug: String,
  sphere: {
    type: String,
  },

  color: { type: String },
  day: { type: String },
  number: { type: Number },
  planet: { type: String },
  gems: { type: String },
  info: { type: String },
  esotericHerbalism: [
    { baths: { type: String } },
    { oils: { type: String } },
    { incense: { type: String } },
  ],
  hekau: [
    { spiritual: { type: String } },
    { planetary: { type: String } },
    { spiritualDirection: { type: String } },
    { mundaneDirection: { type: String } },
  ],
  personalityPortfolio: [
    { personalityTraits: String },
    { emotionalTraits: String },
    { mentalTraits: String },
  ],
  socialCorrespondences: {
    type: String,
    trim: true,
  },
  spiritualPortfolio: { type: String, trim: true },

  kamiticTheraputics: { type: String, trim: true },
  chineeseMedice: { type: String, trim: true },
  spiritualkeynotes: { type: String, trim: true },
  spiritualFunction: {
    type: String,
    trim: true,
  },
  specialCorrelates: { type: String, trim: true },
  keyPhrases: { type: String, trim: true },
  biologicalCorrespondences: [
    { physiology: { type: String, trim: true } },
    { pathology: { type: String, trim: true } },
  ],
  spritualCounsel: { type: String, trim: true },
  hiddenMetu: {
    type: Boolean,
    default: false,
  },
});

metuSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

metuSchema.pre(/^find/, function (next) {
  this.find({ hiddenMetu: { $ne: true } });
  next();
});
metuSchema.post(/^find/, function (docs, next) {
  next();
});
const Metu = mongoose.model('Metu', metuSchema);

module.exports = Metu;

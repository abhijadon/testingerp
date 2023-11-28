const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const applicationSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },

  studentid: {
    type: String,
    trim: true,
    required: true,
  },
  studentname: {
    type: String,
    trim: true,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
  },
  coursename: {
    type: String,
    trim: true,
  },
  university: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  state: {
    type: String,
    trim: true,
  },
  lms: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    default: 'new',
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Applications', applicationSchema);

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
  institute: {
    type: String,
    trim: true,
  },
  university: {
    type: String,
    trim: true,
    required: true,
  },
  sendfeereceipt: {
    type: String,
    trim: true,
  },
  studentid: {
    type: String,
    trim: true,
  },
  studentname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    sparse: true, // Set the sparse property to allow multiple null values
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

// Middleware to handle dynamic validation based on university selection
applicationSchema.pre('save', function (next) {
  if (this.university === 'CU' && !this.studentname) {
    return next(new Error('Student name is required for CU university.'));
  }
  next();
});

module.exports = mongoose.model('Applications', applicationSchema);

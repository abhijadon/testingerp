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
  abhishek: {
    type: String,
    trim: true,
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
    required: true,
  },

  phone: {
    type: String,
    trim: true,
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
  },

  fatherName: {
    type: String,
    trim: true,
  },

  motherName: {
    type: String,
    trim: true,
  },

  session: {
    type: String,
    trim: true,
  },

  sessionType: {
    type: String,
    trim: true,
  },

  courseName: {
    type: String,
    trim: true,
  },

  specialization: {
    type: String,
    trim: true,
  },

  dob: {
    type: String,
    trim: true,
  },

  gender: {
    type: String,
    trim: true,
  },

  installmentType: {
    type: String,
    trim: true,
  },

  paymentMode: {
    type: String,
    trim: true,
  },

  totalCourseFee: {
    type: String,
    trim: true,
  },

  totalPaidAmount: {
    type: String,
    trim: true,
  },

  paidAmount: {
    type: String,
    trim: true,
  },

  duefeeAmount: {
    type: String,
    trim: true,
  },

  counselorEmail: {
    type: String,
    trim: true,
    lowercase: true,
  },

  interestedLoan: {
    type: String,
    trim: true,
  },

  additional: {
    type: String,
    trim: true,
  },

  file1: {
    type: String,
    trim: true,
  },

  file2: {
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

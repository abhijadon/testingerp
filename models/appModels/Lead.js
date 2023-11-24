const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const leadSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  universityname: {
    type: String,
    trim: true,
    required: true,
  },
  _id: {
    type: String,
    trim: true,
    required: true,
  },
  studentname: {
    type: String,
    trim: true,
    required: true,
  },
  fathername: {
    type: String,
    trim: true,
    required: true,
  },
  dob: {
    type: String,
    trim: true,
    required: true,
  },
  session: {
    type: String,
    trim: true,
  },
  mothername: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },
  specialization: {
    type: String,
    trim: true,
  },
  installmenttype: {
    type: String,
    trim: true,
  },
  totalcoursefee: {
    type: String,
    trim: true,
    required: true,
  },

  paymentmode: {
    type: String,
    trim: true,
    required: true,
  },
  totalpaidamount: {
    type: String,
    trim: true,
    required: true,
  },
  paidamount: {
    type: String,
    trim: true,
    required: true,
  },
  counseloremail: {
    type: String,
    trim: true,
    required: true,
  },
  duefeeamount: {
    type: String,
    trim: true,
    required: true,
  },
  interestedloan: {
    type: String,
    trim: true,
    required: true,
  },
  discount: {
    type: String,
    trim: true,
    required: true,
  },
  address: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  sessiontype: {
    type: String,
    trim: true,
  },

  customField: [
    {
      fieldName: {
        type: String,
        trim: true,
      },
      fieldValue: {
        type: String,
        trim: true,
      },
    },
  ],
  source: {
    type: String,
    trim: true,
  },
  coursename: {
    type: String,
    trim: true,
  },
  gendder: {
    type: String,
    trim: true,
  },
  notes: {
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

module.exports = mongoose.model('Lead', leadSchema);

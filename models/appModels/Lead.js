const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const applicationSchema = new mongoose.Schema(
  {
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

    // ... Other fields as per your schema

    status: {
      type: String,
      default: 'new',
    },
    created: {
      type: Date,
      default: Date.now,
    },
  },
  {
    strict: false, // Allow additional fields
  }
);

module.exports = mongoose.model('Applications', applicationSchema);

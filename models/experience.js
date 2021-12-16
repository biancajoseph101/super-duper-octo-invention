const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Experience = new Schema(
  {
    bucketlist_item: { type: String, required: true },
    city_id: { type: Schema.Types.ObjectId, ref: 'cities' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('experiences', Experience);

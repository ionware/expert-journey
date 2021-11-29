const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    name: {
      type: String,
      required: ['The item name is required'],
    },
    description: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      required: ['The item price is required'],
    },
    image: {
      type: String,
      default: null,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    addedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = model('Inventory', schema);

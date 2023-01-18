const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    readiness: {type: String, required: true},
    address: {type: String, required: true},
    owner: {type: Types.ObjectId, ref: "User"},
    date: {type: Date, default: Date.now},
    addition: {type: String}
})

module.exports = model("Order", schema)
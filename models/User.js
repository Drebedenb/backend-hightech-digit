const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    nameOfOrganization: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    orders: [{type: Types.ObjectId, ref: "Order"}]
})

module.exports = model("User", schema)
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    player: { type: String, required: true, maxLength: 100 },
    position: { type: String, required: true, maxLength: 100 },
});

UserSchema.virtual("url").get(function () {
    return `/catalog/author/${this._id}`;
});

module.exports = mongoose.model("User", UserSchema);
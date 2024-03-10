const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    player: { type: String, required: true },
    position: { type: String, required: true },
});

UserSchema.virtual("url").get(function () {
    return `/user/${this._id}`;
});

module.exports = mongoose.model("User", UserSchema);
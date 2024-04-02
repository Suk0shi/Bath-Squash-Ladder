const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChallengeSchema = new Schema({
    challengerUser: { type: Schema.Types.ObjectId, ref: "User", required: true },
    challengedUser: { type: Schema.Types.ObjectId, ref: "User", required: true },
    //status is pending, accepted or result
    status: { type: String, required: true },
    // {user} "defeated" {user}
    result: { type: String },
});

ChallengeSchema.virtual("url").get(function () {
    return `/challenge/${this._id}`;
});

module.exports = mongoose.model("Challenge", ChallengeSchema);
const mongoose = require("mongoose")
const { Schema } = mongoose;

const userSchema = new Schema({
    id: {
        type: Number

    },
    whishList: {
        type: String
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);
// const test = new User({
//     id: "333",
//     whishList: "hhh"
// })
// console.log(test)

module.exports = User
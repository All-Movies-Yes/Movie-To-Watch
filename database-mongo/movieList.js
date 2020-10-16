const mongoose = require("mongoose")
const { Schema } = mongoose

const movieSchema = new Schema({
    moviename: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    imageurl: {
        type: String
    },
    description: {
        type: String
    },
    releasedate: {
        type: Number
    },
}, {
    timestamps: true
});
const Movie = mongoose.model('Movie', movieSchema);
// const test = new Movie({
//     moviename: "wiii",
//     category: 'nkzn',
//     imageurl: "url",
//     description: 'npoooo',
//     releasedate: 'jfnknfk'
// })
// console.log(test)
module.exports = Movie


var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var flightSchema = new Schema( {
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: function () {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth();
            let day = date.getDate();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let futureDate = new Date(year + 1, month, day, hours, minutes, seconds);
            return futureDate;
        }
    },
    destination: {
        type: String
    }
});

module.exports = mongoose.model('Flight', flightSchema)
const monthNames = require('../utils/monthNames');
const moment = require('jalali-moment');

const functions = {
    createID: () => {
        let random = Math.random()
        let id = Math.floor(random * 1000000)
        if (id.toString().length !== 6) {
            functions.createID()
        }
        return Math.floor(random * 1000000)
    },
    createSlug: (name) => {
        return name.split(" ").join("-")
    },
    convertDate: () => {
        let today = moment().locale('fa').format('YYYY/M/D');
        let todayArray = today.split("/")
        return `${todayArray[2]} - ${monthNames.months[todayArray[1]]} - ${todayArray[0]}`
    }
}
module.exports = functions

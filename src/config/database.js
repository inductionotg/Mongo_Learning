const mongose = require('mongoose')

const connect = async () =>{
    await mongose.connect('mongodb://localhost/twitter_Dev')
}

module.exports = connect
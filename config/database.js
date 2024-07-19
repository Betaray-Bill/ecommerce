const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI).then(con => {
        console.log(`MongoDB zdcdzcs connected to the host: ${con.connection.host} `)
    })
}

module.exports = connectDatabase;
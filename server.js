const app = require('./app');
const path = require('path')
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
dotenv.config({ path: path.join(__dirname, "config/config.env") });

connectDatabase()

app.listen(process.env.PORT, () => {
    console.log(`Server Listening ${process.env.PORT}`);
})
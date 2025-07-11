const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    mongoose: {
        url: process.env.MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
};
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connections.on("connected", () => {
    console.log(`Mongoose connected to ${process.env.DATABASE_URL}`)
})

module.exports = mongoose;
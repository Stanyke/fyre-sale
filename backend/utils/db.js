const mongoose = require('mongoose')

const mongooseDB = process.env.MONGOOSE_SETUP

mongoose.connect(mongooseDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log(`MongoDB's mongoose is connected`)
}).catch((err) => {
    console.log(`MongoDB's mongoose failed to connect`)
})
const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('✅ Database connected ...'))
.catch(err => console.log('💀 Failed to connect databse ...'))
const mongoose = require("mongoose");
const validator = require("validator");

const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true,
        minLength: 2,
        maxLength: 50,
        required: true
    },
    email: {
        type: String,
        trim: true,
        maxLength: 50,
        required: true,
        lowercase: true,
        unique: [true, 'Email already present'],
        validate: (value) => {
            if(!validator.isEmail(value))
            throw new Error('Plese enter valid email.');
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: [true, 'Phone number already present'],
    },
    address: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

const Student = new mongoose.model('Student', studentsSchema);
module.exports = Student;
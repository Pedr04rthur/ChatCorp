const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Nome obrigatório!'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email obrigatório!'],
        unique: true,
        lowercase: true,
        trim: true

    },
    password:{
        type: String,
        required: [true, 'Senha obrigatória!'],
        minlength: 6
    },
    department: {
        type: String,
        required: [true, 'Departamento obrigatório!'],
        trim: true
    },
    avatar: {
        type: String,
        DEFAULT: ''
    }

}, {
    timestamps: true
});


// criptografando a senha antes de salvar

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next()
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassoword, userPassowrd);

};

module.exports = mongoose.model('User', userSchema);

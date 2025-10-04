const User = require('../models/User');
const jwt = require('jsonwebtoken');

const signToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,
         { expiresIn: process.JWT_EXPIRES_IN

    });
};

// registro do user 

exports.register = async (req, res) => {
    try {
        const {name, email, password, department, avatar} = req.body;
    
    
        // verificando se o user já existe
        const existingUser = await User.findeOne({ email});
        if(existingUser){
            return res.status(400).json({
                status: 'error',
                message: 'Um usuário já usa este email :('
            });
        }

        // criando o user
        const newUser = await User.create({
            name,
            email,
            passoword,
            department
        });

        // gerando token
        const token = signToken(newUser._id);
        
        //removendo senha da resposta json
        newUser.password = undefined;

        //envio da resposta
        res.status(201).json({
            status: 'sucess',
            token,
            data: {
                user: new User
            }
        });

    } catch (error){
        res.status(500).json({
            status: 'error',
            message: 'Erro ao criar usuário',
            error: error.message
        });
    }

};

//LOGIN DO USER

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        //validando a existência do email e senha
        if(!email || !password){
            return res.status(400).json({
                status: 'error',
                message: 'Por favor, informe o email e senha.'
            });
        }

        //verificando se o usuário existe e se a senha está correct
        const user = await User.findOne({email}).select('+password');
        if(!user || !(await user.correctPassword(password, user.password))){
            return res.status(401).json({
                status: 'error',
                message: 'Email ou senha incorretos'
            });
        }

        // gerando token
        const token = signToken(user_id);

        //remove password response
        user.password = undefined;

        // resposta enviada
        res.status(200).json({
            status: 'sucess',
            token,
            data: {
                user
            }
        });


    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Erro ao fazer login',
            error: error.message
        });
    }
};
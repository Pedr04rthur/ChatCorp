const express = require('express'); // aqui estou importando o express
const { emitWarning } = require('process');
const messageController = require('./controllers/messageController');
const app = express(); //criação de uma aplicação express

const PORT = process.env.PORT || 5000; // definindo a porta do servidor

app.use(express.json()); 

// roda básica para testar
app.get('/', (req, res) => {
    res.json({message: 'SERVIDOR CHATCORP FUNCIONANDO!'})
});

//rota para obter todas as mensagens
app.get('/messages', (req, res) => {
    try {
        const messages = messageController.getMessages();
        res.json(messages);
    } catch (error) {
        res.status(500).json({error: 'Erro ao obter mensagens'});
    }

});

//rota para enviar uma nova mensagem
app.post('/mensages', (req,res) =>{
    try {
        const {nome, texto} = req.body;
        
        if(!nome || !texto){
            return res.status(400).json({error: 'Nome e texto são obrigatórios'});
    }

    const newMessage = messageController.addMessage(nome,texto);
    res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({error: 'Erro ao adicionar mensagem'});
    }
});



//iniciando o servidor e ficar escutando na porta definida  
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

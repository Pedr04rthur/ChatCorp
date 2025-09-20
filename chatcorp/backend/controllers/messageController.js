// Aqui ficará toda a lógica por trás de cada rota, o "como" de cada endPoint

//importando a função utilitária de formatar mensagem
const formatMessage = require('../utils/formatMessage');

//um array para simular um banco de dados
let mensagens = [];

//definindo um controlador
const messageController = {
    getMessages: () => {
        return mensagens
    },

    addMessage: (nome,texto) => {
        //formatando a mensagem com a função criada
        const novaMensagem = formatMessage(nome,texto);
        mensagens.push(novaMensagem); // aqui adiciono as mensagens ao array
        return novaMensagem; // retornando a nova mensagem

    }
};

module.exports = messageController; // exportando o controlador para que outros arquivos possam vê-lo
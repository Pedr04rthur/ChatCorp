// importando o controlador de mensagens
const messageController = require('./controllers/messageController');

//testando funções
console.log("Mensagens iniciais:", messageController.getMessages());

const msg = messageController.addMessage("Ana","Oiee");
console.log("MENSAGEM ADICIONADA: ",msg);

//Adicionando mais uma mensagem

messageController.addMessage("Pedro", "Olá, Ana!");

//verificando o array onde está servindo como banco para as mensagens
console.log("All Messages:", messageController.getMessages());
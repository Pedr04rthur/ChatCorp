// utils para funções auxiliares que podem ser usuadas em qualquer lugar do projeto 

//formatando a mensagem para o chat
function formatMessage(nome,texto){
    return {
        nome,
        texto,
        data: new Date() 
    }
}

// exportando a função para que outros arquivos possam vê-la
module.exports = formatMessage;
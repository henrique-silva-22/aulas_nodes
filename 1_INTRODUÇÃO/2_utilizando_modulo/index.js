const fs = require('fs')

fs.readFile('drase.txt', 'utf8', (erro, dados) => {
    if(erro) {
        console.log(erro)
        return
    }



    console.log(dados)
})
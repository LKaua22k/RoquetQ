import Modal from './modal.js'

const modal = Modal()

// pegar todos os botoes ques existem com a classe checl
const btnChecks = document.querySelectorAll('.actions a.check');

btnChecks.forEach(button => {
    button.addEventListener('click', event => {
        modal.open()
    })
})

// Pegar o marcar como lido quando for clicado


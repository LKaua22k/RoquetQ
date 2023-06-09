import Modal from './modal.js'

const modal = Modal()
const modalTitle = document.querySelector('.modal h2')
const modalText = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal .buttons button')

// pegar todos os botoes ques existem com a classe checl
const btnChecks = document.querySelectorAll('.actions a.check');

btnChecks.forEach(button => {
    button.addEventListener('click',handleClick)
})


const deletebutton = document.querySelectorAll('.actions a.trash')

deletebutton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event,false))
})

function handleClick(event, check = true){
    event.preventDefault()

    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = check ? 'Marcar como lida' : 'Excluir'
    modalText.innerHTML = check ? 'tem certeza que deseja marcar como lida?' : 'Tem certeza que você deseja excluir esta pergunta?'
    modalButton.innerHTML = check ? 'Sim,marcar como lida' : 'sim,excluir'
    check ? modalButton.style.backgroundColor = '#3485ff' : modalButton.style.backgroundColor = '#e83f5b'
    modal.open()
}
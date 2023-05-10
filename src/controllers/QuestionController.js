const Database = require('../db/config')

module.exports = {
    
    async index(req , res){
        
        const db = await Database()
        const roomId = req.params.room
        const questionsId = req.params.question
        const action = req.params.action
        const password = req.body.password

        // Verificar se a senha esta correta
        const Vroom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
        if (Vroom.pass == password) {
            if (action == "delete") {
                // Deletando a question no bd
                await db.run(`DELETE FROM questions WHERE id = ${questionsId}`)
            }else if (action == "check") {
                // Verificando se a questão foi lida
                await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionsId}`)
            }
            res.redirect(`/room/${roomId}`)
        }else {
            // Quando a senha for incoreta
            res.render('passincorrect', {roomId: roomId})
        }
    },
    
    async create(req, res){
        const db = await Database()
        const question = req.body.question
        const roomId = req.params.room

        await db.all(`INSERT INTO questions (title,room,read) VALUES("${question}", ${roomId} , 0)`)

        res.redirect(`/room/${roomId}`)
    }
}
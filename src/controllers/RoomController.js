const Database = require("../db/config")

module.exports = {
    async create(req , res){
        
        const db = await Database()
        const pass = req.body.password
        let roomId 
        let isRoom = true

        while(isRoom){
            // Gerar o numero da sala
            for (let i = 0; i < 6; i++) {
                i === 0 ? roomId = Math.floor(Math.random() * 10).toString() :
                roomId += Math.floor(Math.random() * 10).toString()
            }
            // Verificar se esse numero ja existe no BD
            const roomExistids = await db.all(`SELECT id FROM rooms`)
            isRoom = roomExistids.some(roomExistids => roomExistids == roomId)
            if(!isRoom){
                    // Inserir a sala no banco
                    await db.run(`INSERT INTO rooms (id, pass) VALUES(${parseInt(roomId)}, ${pass})`)            
            }
        }

        await db.close()

        res.redirect(`/room/${roomId}`)
    },

    async open(req, res){
        const db = await Database()
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
        let isNotQuestion

        // Quando a sala não tem perguntas
        if(questions.length == 0){
            if(questionsRead.length == 0){
                isNotQuestion = true
            }
        }
        
        res.render("room",{roomId: roomId, questions: questions, questionsRead: questionsRead , isNotQuestion: isNotQuestion})
    },

    // Para entrar na sala com id
    enter(req, res){
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)
    }
    
}
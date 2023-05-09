const Database = require("../db/config")

module.exports = {
    async create(req , res){
        
        const db = await Database()
        let roomId 
        const pass = req.body.password

        for (let i = 0; i < 6; i++) {
            i === 0 ? roomId = Math.floor(Math.random() * 10).toString() :
            roomId += Math.floor(Math.random() * 10).toString()
        }

        await db.run(`INSERT INTO rooms (id, pass) VALUES(${parseInt(roomId)}, ${pass})`)

        await db.close()

        res.redirect(`/room/${roomId}`)
    },

    async open(req, res){
        const db = await Database()
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
        res.render("room",{roomId: roomId, questions: questions, questionsRead: questionsRead})
    }
}
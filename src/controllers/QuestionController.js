const Database = require('../db/config')

module.exports = {
    
    teste(req , res){
        
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password

        console.log(`room = ${roomId}, questionId = ${questionId}
        action = ${action}, password = ${password}`)
    },
    
    async create(req, res){
        const db = await Database()
        const question = req.body.question
        const roomId = req.params.room

        await db.all(`INSERT INTO questions (title,room,read) VALUES("${question}", ${roomId} , 0)`)

        questions.forEach(question => {
            
        });

        res.redirect(`/room/${roomId}`)
    }
}
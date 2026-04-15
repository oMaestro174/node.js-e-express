const fs = require('fs')
const path = require('path')

const jsonDatabase = path.join(__dirname, '../data/db.json')

const listStudents = async () => {
    try {
        const data = await fs.promises.readFile(jsonDatabase, 'utf-8')
        let database = JSON.parse(data)
        return database
    } catch (error) {
        console.log("Error on file reading:", error)
        return null
    }
}

const createStudent = async (student) => {
    try {
        const data = await fs.promises.readFile(jsonDatabase, 'utf-8')
        let database = JSON.parse(data)
        database["students"].push(student)
        await fs.promises.writeFile(jsonDatabase, JSON.stringify(database), 'utf-8')
        
    } catch (error) {
        console.log("Error on file update:", error)
        return null
    }
    return student
}

module.exports = {
    listStudents, 
    createStudent
}
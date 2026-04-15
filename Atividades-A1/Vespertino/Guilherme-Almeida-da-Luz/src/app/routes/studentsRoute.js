const app = require('../server.js')
const controller = require('../controllers/studentsController.js')

app.get('/students', async (req, res) => {
    const students =  await controller.listStudents()
    res.json({
        rota: "./students",
        acesso: true,
        ...students
    })
})

app.post('/students', async (req, res) => {
    const newStudent = req.body
    const result = await controller.createStudent(newStudent)
    if (result) res.status(201).json(result)
})
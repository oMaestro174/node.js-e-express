const express = require('express')
const app = express()
const port = 3000
const routes  = require("./router/routes")
app.use(express.json())

app.use("/", routes)

app.listen(port, () =>{
    console.log(`servidor está funcionando na porta: ${port}`)
})


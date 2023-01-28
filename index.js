require("dotenv").config()
const port = process.env.PORT||5000
const express = require('express')
const cors = require("cors")
const dbConnect = require('./config/db')
const QuizRoute = require("./routes/quiz.routes")

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => res.send('server running'))
app.use("/quiz",QuizRoute)



app.listen(port, async() => {
    await dbConnect()
    console.log(`server started on ${port}`)
})
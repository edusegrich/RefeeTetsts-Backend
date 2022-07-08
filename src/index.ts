import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import userRouter from './routes/user'
import loginRouter from './routes/login'
import sportRouter from './routes/sport'
import questionRouter from './routes/question'
import questionsRouter from './routes/questions'
import examRouter from './routes/exam'
const { networkInterfaces } = require('os')
const nets = networkInterfaces()

const app = express()

// const allowedOrigins = ['http://localhost:19000']

// const options: cors.CorsOptions = {
//   origin: allowedOrigins
// }

// app.use(cors())
app.use(express.json())


const PORT = 3000

mongoose.connect('mongodb://localhost:27017')

app.use('/api/login', loginRouter)
app.use('/api/user', userRouter)
app.use('/api/sport', sportRouter)
app.use('/api/question', questionRouter)
app.use('/api/questions', questionsRouter)
app.use('/api/exam', examRouter)

app.get('/ping', (_, res) => {
    console.log('someone ping here!')
    res.send('pong')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    console.log(nets)
})

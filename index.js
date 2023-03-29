const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config()

const db = require('./models')

// body parser from express 
app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        message: 'This is my API'
    })
})

const { userRouters, authRouter } = require('./routers')
app.use('/user', userRouters)
app.use('/auth', authRouter)


app.listen(process.env.PORT, () => {
    // synchronization project to mysql if alter in table
    // db.sequelize.sync({ alter: true })
    console.log(`Success running server at port ${process.env.PORT}`);
})

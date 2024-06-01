//npm init -y
//npm i express dotenv cors 
//npm i -D  @babel/core @babel/node @babel/preset-env
//npm install --save sequelize mysql2
//npx sequelize-cli init
//npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
//npx sequelize db:migrate


import express from 'express'
require ('dotenv').config()
import cors from 'cors'
import initRoutes from './src/routes'
import connectDatabase from './src/config/connectDatabase'
// import generateDate from './src/ultis/generateDate'


// console.log (getNumberFromString('4.2 trieu'))
const app = express()


// console.log(generateDate());

app.use(cors({
    origin: "*", 
    methods: ["POST", "GET", "PUT", "DELETE"]
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

initRoutes(app)
connectDatabase()


const port = process.env.PORT || 8888
const listener = app.listen(port, () => {
    console.log (`Server is running on the port ${listener.address().port}`)
})
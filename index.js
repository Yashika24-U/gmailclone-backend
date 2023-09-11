import express from 'express'
import Connection from './database/db.js'
import routes from './routes/route.js'
import cors from 'cors'

const app = express()


app.use(cors())  //crossorigin error
// app.use(express.urlencoded()); //for email %20 
app.use(express.json({extended:true}));

app.use('/',routes);

const PORT = 9000



app.listen(PORT , ()=>{Connection();console.log(`Server started at ${PORT}`)})

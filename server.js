require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose')
const cors =require('cors')
const userRoutes=require('./routes/user')
// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())
// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

const connectDB= async()=>{
try {
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(process.env.PORT, () => {
    console.log('connected to db and listening')
   })
} catch (error) {
  console.log(error.message)
}
}
connectDB()
// mongoose.connect(process.env.MONGO_URL).then(() => {
//      // listen to port
//      app.listen(process.env.PORT, () => {
//      console.log('connected to db and listening for requests on port', process.env.PORT)
//      })
//      }).catch((err) => {
//       console.log(err)
//      }) 
    

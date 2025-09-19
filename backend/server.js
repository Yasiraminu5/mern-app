const dotenv = require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const cors = require("cors");



const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()    
});

//routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 4000;

//connect db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
    console.log(`connected to db and running on port ${PORT}`);
    
}) ;
})
.catch((error) => {
    console.error("❌ DB connection error:", error);
})




 
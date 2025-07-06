import express from 'express'
// import dotenv from 'dotenv'
import cors from 'cors'
import jobRoutes from './routes/jobRoutes.js'
import applyRoutes from './routes/applyRoutes.js'

// dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());

app.use('/jobs',jobRoutes);
app.use('/',applyRoutes);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`server is running on localhost:${PORT}`)
})
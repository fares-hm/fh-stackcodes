import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();
// start all routes with the path /posts Eg. http://localhost:5000/posts


app.use(bodyParser.json({limit: "10mb" , extended: true}));
app.use(bodyParser.urlencoded({limit: "10mb" , extended: true}));
app.use(cors());

app.use('/posts' , postRoutes);

app.get('/', (req,res) =>{
  res.send('Welcome to Stack Codes APIs');
})

// MongoDB Connection
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);
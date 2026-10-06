import express from 'express';
import cors from 'cors';
import { type TaskCreationDTO } from './types/index.js';
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});

const app = express(); //start the Traffic cop
app.use(cors()); //allow cross origin requests from the frontend(so that we react can reach the Node backend)
app.use(express.json()) //tell it to parse incoming POST requests into json obj


//tell it to specifically listen for POST requests to the creation of tasks and then respond with a fake database item
app.post("/api/tasks", async (req,res) =>{
    const incomingData = req.body as TaskCreationDTO;
    const sql = "INSERT INTO TASK (title,description) VALUES ($1,$2) RETURNING *";
    const values = [incomingData.title,incomingData.description];
   const result = await pool.query(sql, values);
   res.status(201).json(result.rows[0]);

});

//have the app listen on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

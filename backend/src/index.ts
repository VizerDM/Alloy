import express from 'express';
import cors from 'cors';
import { type TaskCreationDTO } from './types/index.js';

const app = express(); //start the Traffic cop
app.use(cors()); //allow cross origin requests from the frontend(so that we react can reach the Node backend)
app.use(express.json()) //tell it to parse incoming POST requests into json obj


//tell it to specifically listen for POST requests to the creation of tasks and then respond with a fake database item
app.post("/api/tasks",(req,res) =>{
    const incomingData = req.body as TaskCreationDTO;
    const TaskTitle = incomingData.title;
    const TaskDescription = incomingData.description;
    const fakedatabaseItem = {
        id:99,
        title:TaskTitle,
        description: TaskDescription,
        status: "TODO",
        createdAt: new Date(),
        updatedAt: new Date()
    }
    res.status(201).json(fakedatabaseItem);
});

//have the app listen on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

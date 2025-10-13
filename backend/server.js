import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import notesRoutes from "./src/routes/notesRoutes.js";
import { connectDB } from "./src/config/db.js";
import rateLimiter from "./src/middleware/rateLimiter.js";


connectDB();
const app = express();
const port = process.env.PORT || 8000


//middelware
app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json());
app.use(rateLimiter);



app.use("/api/notes", notesRoutes);


// app.get("/api/notes", (req, res)=>{
//     res.status(200).send("You got 5 notes");
// });

// app.post("/api/notes", (req,res) =>{
//     res.status(201).json({message: "Post created Successfully"})
// });
// app.put("/api/notes/:id", (req,res) =>{
//     res.status(200).json({message: "Post Updated Successfully"})
// })
// app.delete("/api/notes/:id", (req, res) =>{
//     res.status(200).json({message: "Post deleted Successfully"})
// })

app.listen(port, () =>{
    console.log("Server is Running Successfully on Port 8000");
});

//mongodb+srv://koujayanik_db_user1:zG66uixSa2zDSeRV@cluster0.ehbzgoc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
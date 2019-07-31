const express = require("express")
const cors = require("cors")
var fs = require('fs');



const server = express()

server.use(cors())

// server.use(express.static('images'))


// server.get("/", (req,res)=>{
//     res.write(bg,'binary');
//     res.end(null, 'binary');
// })


// server.get("/pokemon_terrain.jpg", (req,res)=>{
//     res.sendFile("/Users/dan/Documents/Lambda_School/Lambda_Projects/Maze_Mud/image_server/base64/base64_terrain")
// })

server.use(express.static('images'))

server.listen(5000,()=> console.log("listening on port 5000"))
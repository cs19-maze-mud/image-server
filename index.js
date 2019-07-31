const express = require("express")
const cors = require("cors")



const server = express()

server.use(cors())


server.use(express.static('images'))

const port = process.env.PORT || 5000

server.listen(port,()=> console.log(`listening on port ${port}`))
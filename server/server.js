const express = require("express")
const app = express()

require("dotenv/config")
require("./config/db.js")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use(require('cors')())
app.use('/api', require('./routes'))
app.use((error, req, res, next) => {    
    console.log(error);
    res.status(error.status || 500).json({error: error.error|| true, message: error.message||'Something went wrong'})
})
app.listen(process.env.PORT, () => {
    console.log(`Server running on http://127.0.0.1:${process.env.PORT}`)
})
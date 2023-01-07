const express = require('express')
const teamsRoute = require('./routes/teamsRoute')
const app = express()
const port = 3000

app.use('/', express.static('public'))

app.use('/teams', teamsRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express')
const teamsRoute = require('./routes/teamsRoute')
const postRoute = require('./routes/postRoute')
const app = express()
const port = 3000

app.use('/', express.static('public'))

app.use('/teams', teamsRoute)

app.use('/posts', postRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
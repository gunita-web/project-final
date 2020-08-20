const express = require('express');
const app = express()
const httpHandler = require('./httpHandler')
const db = require('./db')
const cors =require ('cors')


const PORT= 3008;
app.use((cors()))

app.get('/',httpHandler.getRoot)
app.post('/SaveTracks',httpHandler.AddTarckToDatabase)
app.listen(PORT , function()
{
console.log("server connected");
})
const express = require('express');
const app = express()
const httpHandler = require('./httpHandler')
const cors =require ('cors')


const PORT= 3003;
app.use((cors()))

app.get('/',httpHandler.getRoot)

app.listen(PORT , function()
{
console.log("server connected");
})
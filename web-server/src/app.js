const express = require('express')
const app = express()

app.get('',(req,res)=>{
    res.send('Hello Sajit Express here')
})

app.get('/weather',(req,res)=>{
    res.send('Weather Page')
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})

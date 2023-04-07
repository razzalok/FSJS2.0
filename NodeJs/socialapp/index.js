const express = require('express')
const app =express()
const PORT = 3000
app.get('/',(req,res)=>{
    res.status(200).send("Hello")

})
app.get('/insta',(req,res)=>{
    const insta={
        username:"Alok",
        follower:235,
        follow:412,
    }
    res.status(404).json({insta}).send("Hello")

})
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})

// console.log("Hello FSJS web dev");
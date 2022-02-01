const express = require('express');
const app = express();





app.get('/file', (req, res)=>{
    try {
        res.sendFile(__dirname+'/video.mp4');
    } catch (error) {
        console.log(error);
    }
})



app.listen(5000, ()=>{
    console.log("Server ishlamoqda...");
});

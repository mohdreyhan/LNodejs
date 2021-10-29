const express = require('express');
const app = express();
const cors = require('cors');
const { json } = require('express');


//MiddleWare
app.use(cors());

app.use(express.json());


//API's
app.get('/', (req,res) => {
    const data = "My Name is neelam";
    res.send({
        status : 200,
        message : "executed successfulyy",
        data : data
    })
});


app.get('/api/getDetails', (req,res) => {
    const data = "I am an idiot";
    res.send({
        status : 200,
        message : "executed successfulyy",
        data : data
    })
});

app.post('/api/userInfo', (req,res) => {
    const userInfo  = req.body.userInfo
    const companyInfo = req.body.companyInfo

    res.send({
        status : 200,
        message : "executed successfully",
        userInfo : userInfo,
        companyInfo : companyInfo

    })
});


app.listen(3000 , () => {
    console.log("Listening to port 3000")
});







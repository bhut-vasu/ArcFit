const express = require('express');
const app = express();
const nodemailer = require('nodemailer')

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json());

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/cont.html')
// })

app.post("/contact", (req,res)=>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "rajadipatidar227@gmail.com",
            pass: "454646"
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: "rajadipatidar227@gmail.com",
        subject: `Message from ${req.body.subject}`,
        text: "gtrg"
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error) {
            console.log(error);
            res.send("error")
        } else {
            console.log("Email Sent")
            res.send("success")
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})
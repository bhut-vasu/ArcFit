const nodemailer = require("nodemailer");
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const http = require("http");

const app = express();

const server = http.createServer(app);
app.use(cors({ origin: true }));
app.use(express.json());
app.use(cors());

app.get("/", async (req, res, next) => {
  res.json("Hey There. You are on a server of fitness platform.");
});

app.post("/", async (req, res, next) => {
  try {

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "rajadipatidar227@gmail.com",
        pass: "ilre donl ziku uhih",
      },
    });

    const mailOptions = {
      from: "rajadipatidar227@gmail.com",
      to: "vasubhut157@gmail.com",
      subject: "ArcFit", 
      text: `Email From {"${req.body.email}"}. Name is {"${req.body.name}"}. Message for query {"${req.body.reason}"} is {"${req.body.remarks}"}`,
    };

    transporter.sendMail(mailOptions, (eri) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent");
      }
    });

    res.send({ user: true, data: result });
  } catch (e) {
    console.log(e)
    res.send({ user: false });
  }
});

app.listen(5077, () => {
  console.log(`Server is running on`);
});

const express = require('express');
const os = require('os');
const nodeMailer = require('nodemailer');

const app = express();

app.use(express.static('dist'));
app.use(express.json());

// app.get('/api/getUsername', (req, res) => {
//     res.send({ username: os.userInfo().username })
// });

app.post('/submit', (req, res) => {
    console.log(req.body);
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'ndyoung96@gmail.com',
            pass: 'NDYndy969696'
        }
    });
    let mailOptions = {
        from: '"Nicholas Young" <ndyoung96@gmail.com>', // sender address
        to: '"Nicholas Young" <ndyoung96@gmail.com>', // list of receivers
        subject: "Personal Website Form Response", // Subject line
        text: JSON.stringify(req.body), // plain text body
        html: JSON.stringify(req.body) // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("ERROR");
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.sendStatus(200)
    });

});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

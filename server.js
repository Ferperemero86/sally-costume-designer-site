const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
});


app.post('/sendMail',(req,res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'ekdrms264@gmail.com',
      from: req.body.email,
      subject: req.body.subject,
      text: req.body.textArea,
      html: `<strong>${req.body.textArea}</strong>`,
    };
    if(sgMail.send(msg)) {
        res.redirect('/emailsent')
    }
})


app.listen(port);

console.log('Server started');
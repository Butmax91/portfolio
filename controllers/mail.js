const express = require('express');
const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const transporter = nodemailer.createTransport(sendGridTransport({
    auth:{
        api_user: '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'
    }
}));


const router = express.Router();

router.use('/form',(req,res,next)=>{
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {

        body = JSON.parse(body)
        console.log(body)
        if(body.name && body.email && body.message){
            transporter.sendMail({
                to: 'butmax1991@gmail.com',
                from: body.email,
                subject: 'Signup succeeded!',
                text: body.message,
            }).then(r=>r.message ==='success'? res.send(true):res.send(false));
        }else res.send(false);
    });




   /* transporter.sendMail({
        to: 'butmax1991@gmail.com',
        from: email,
        subject: 'Signup succeeded!',
        html: '<h1>message</h1>',
    }).then(r=>console.log(r));*/

});


module.exports = router;
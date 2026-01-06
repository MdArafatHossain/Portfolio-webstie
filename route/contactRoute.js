const router = require ('express').Router()
const nodemailer = require('nodemailer')


router.post('/contact', async (req, res) =>{
    let data = req.body
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.status(400).json({msg: "Please fill all the fields"})
    }
    
    try {
        let smtpTransporter = nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth:{
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        })
        
        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: data.email,
            subject:`Portfolio Contact: ${data.name}`, 
            html:`
            <h3>New Contact Form Submission</h3>
            <ul> 
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>
            `
        }

        await smtpTransporter.sendMail(mailOptions)
        res.status(200).json({msg:'Thank you for contacting MD Hossain'})
    } catch (error) {
        console.error('Email error:', error)
        res.status(500).json({msg:"Failed to send email. Please try again."})
    }
})
module.exports = router

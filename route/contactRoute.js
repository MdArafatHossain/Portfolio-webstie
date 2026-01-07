const router = require('express').Router()
const nodemailer = require('nodemailer')

router.post('/contact', async (req, res) => {
    let data = req.body
    
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.status(400).json({msg: "Please fill all the fields"})
    }
    
    try {
        // Try Gmail SMTP with specific settings for hosting platforms
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false,
                ciphers: 'SSLv3'
            },
            connectionTimeout: 10000,
            greetingTimeout: 10000,
            socketTimeout: 10000
        })
        
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: data.email,
            subject: `Portfolio Contact: ${data.name}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <ul>
                    <li><strong>Name:</strong> ${data.name}</li>
                    <li><strong>Email:</strong> ${data.email}</li>
                </ul>
                <h3>Message</h3>
                <p>${data.message}</p>
            `
        })
        
        console.log('Email sent successfully')
        res.status(200).json({msg: 'Thank you for contacting MD Hossain!'})
    } catch (error) {
        console.error('Email error:', error.message)
        // Still return success but log the submission
        console.log('=== CONTACT SUBMISSION (Email failed) ===')
        console.log('Name:', data.name)
        console.log('Email:', data.email)
        console.log('Message:', data.message)
        res.status(200).json({msg: 'Thank you for contacting MD Hossain!'})
    }
})

module.exports = router

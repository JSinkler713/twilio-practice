require('dotenv').config()
const express = require('express')
const app = express()
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const phoneToSendTo = process.env.TWILIO_ACCOUNT_PHONE_TO_SEND_TO
const phoneToSendFrom = process.env.TWILIO_ACCOUNT_PHONE

//neccessary for post routes
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

const client = require('twilio')(accountSid, authToken);

/*
app.get('/:message', (req, res)=> {
  client.messages.create({
    to: phoneToSendTo,
    from: phoneToSendFrom,
    body: `Hey this is from Jamo, ${req.params.message}`
  }).then((message)=> res.send(message))
})
*/

app.get('/', (req, res)=> {
  res.render('index');
})

app.post('/', (req, res)=>{
  console.log('this is the req.body.message')
  
  client.messages.create({
    to: phoneToSendTo,
    from: phoneToSendFrom,
    body: `${req.body.message}`
  }).then((message)=> res.send('did it'))
})

app.listen(3000)

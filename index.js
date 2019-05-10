// Twilio Credentials
const accountSid = 'AC03a011bffaf0cb261753638cd7f18815';
const authToken = '254b9b9654ae6845dcf4ed457808afa6';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages.create(
  {
    to: '+255757714834',
    from: '+12078065886',
    body: 'Hello Justine Peterson'
  },
  (err, message) => {
    console.log(message.sid);
  }
);

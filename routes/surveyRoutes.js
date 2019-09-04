const mongoose = require('mongoose');
const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const mailer = require('../services/mailer');

const Survey = mongoose.model('surveys');

sgMail.setApiKey(keys.sendGridKey);

module.exports = app => {
  app.get('/api/surveys/thankyou', (req, res) => {
    res.send('Thank you for voting');
  });

  app.post('/api/surveys/webhooks', (req, res)=>{
    console.log(req.body);
    res.send({});
  });
 
  app.post(
    '/api/surveys',
    requireLogin,
    requireCredits,
    async (req, res) => {
      const { title, subject, body, recipients } = req.body;

      const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients
          .split(',')
          .map(email => ({ email: email.trim() })),
        _user: req.user.id,
        dateSent: Date.now()
      });

      const msg = mailer(survey);

      try {
        await sgMail.send(msg);
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();
        res.send(user);
      } catch (err) {
        res.status(422).send(err);
      }
    }
  );
};

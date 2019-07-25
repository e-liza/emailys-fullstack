const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = data => {
  const msg = {
    to: data.recipients.map(email => email.email),
    from: 'no-reply@emaily.com',
    subject: data.subject,
    html: surveyTemplate(data)
  };

  return msg;
};

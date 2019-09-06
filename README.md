# emailys-fullstack

A fullstack application, that uses React and Redux on frontend and Node.js with express on backend.
It also uses Stripe for payments and Sendgrid for sending emails.

Fork, clone, run npm init from your project directory. 

The folder named config expects a dev.js file with all the keyd needed for the development environment.

module.exports = {
  googleClientID:'',
  googleClientSecret: '',
  mongoURI:'',
  cookieKey: '',
  stripePublishableKey: '',
  stripeSecretKey: '',
  sendGridKey:'',
  redirectDomain: ''
};

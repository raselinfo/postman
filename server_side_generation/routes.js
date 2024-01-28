module.exports = function (app) {
  /*
  * Routes
  */
  app.use('/api', require('./routes/api.route'));

};

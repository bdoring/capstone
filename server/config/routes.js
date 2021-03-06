const users = require("../controllers/users.js");
const vendors = require("../controllers/vendors.js");
const invoices = require("../controllers/invoices.js");


module.exports = function(app){
  //User routes
  app.get('/', users.redirect);
  app.get('/users', users.getAll);
  app.get('/users/:id', users.getOne);
  app.post('/users', users.createOne);
  app.patch('/users/:id', users.updateOne);

  //Vendor Routes
  app.get('/vendors', vendors.getAll);
  app.get('/vendors/:id', vendors.getOne);
  app.post('/vendors', vendors.createOne);
  app.patch('/vendors/:id', vendors.updateOne);

  //Invoice Routes
  app.get('/invoices', invoices.getAll);
  app.get('/invoices/:id', invoices.getOne);
  app.post('/invoices', invoices.createOne);
  app.patch('/invoices/:id', invoices.updateOne);
  app.patch('/invoices/status/:id', invoices.approveOrReject);
  app.patch('/invoices/schedule/:id', invoices.schedule);

  //Auth Routes
  app.post('/auth/login', users.login);
  app.post('/auth/logout', function(req, res) {
    res.send({ route: 'logout'})
  });
  app.get('/auth/user', function(req, res) {
    res.send({ route: 'user' })
  });
  app.get('/auth/refresh', function(req, res) {
    res.send({ route: 'refresh' })
  });
}

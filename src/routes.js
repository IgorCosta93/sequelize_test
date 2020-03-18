const express = require("express");
const UserController = require('./controllers/User');
const AddressController = require('./controllers/Address');
const TechController = require('./controllers/Tech');
const ReportController = require('./controllers/Report');

const routes = express.Router();

routes.get("/", (req, res) => {
    return res.json({ hello: "Hello World from API" });
});
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/address', AddressController.index);
routes.post('/users/:user_id/address', AddressController.store);

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;
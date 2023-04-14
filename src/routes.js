const {Router} = require("express");
const routes = Router();

const addPatiente = require('./controllers/addPatiente')
const getAllPatients = require('./controllers/getAllPatients')


routes.route('/add-patiente')
    .post(addPatiente);

routes.route('/edit-patiente')
    .put();

routes.route('/get-all')
    .get(getAllPatients);

routes.route('/delete-patiente')
    .delete();


module.exports = routes;

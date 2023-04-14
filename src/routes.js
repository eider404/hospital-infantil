const {Router} = require("express");
const routes = Router();

const addPatiente = require('./controllers/addPatiente')
const getAllPatients = require('./controllers/getAllPatients')
const editPatiente = require('./controllers/editPatiente')
const deletePatiente = require('./controllers/deletePatiente')


routes.route('/add-patiente')
    .post(addPatiente);

routes.route('/edit-patiente')
    .put(editPatiente);

routes.route('/get-all')
    .get(getAllPatients);

routes.route('/delete-patiente/:id')
    .delete(deletePatiente);


module.exports = routes;

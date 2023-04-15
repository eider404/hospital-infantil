const {Router} = require("express");
const routes = Router();

const addPatiente = require('./controllers/addPatiente')
const getAllPatients = require('./controllers/getAllPatients')
const editPatiente = require('./controllers/editPatiente')
const deletePatiente = require('./controllers/deletePatiente')
const generatePdf = require('./controllers/generatePdf')
const getPatiente = require('./controllers/getPatiente')

//http://localhost:3000/getPaciente?id=17
routes.route('/getPaciente?:id')
    .get(getPatiente);

routes.route('/add-patiente')
    .post(addPatiente);

routes.route('/edit-patiente')
    .put(editPatiente);

routes.route('/get-all')
    .get(getAllPatients);

routes.route('/delete-patiente/:id')
    .delete(deletePatiente);

routes.route('/generate-pdf')
    .get(generatePdf);


module.exports = routes;

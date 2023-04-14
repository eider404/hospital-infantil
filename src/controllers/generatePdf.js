const PDFDocument = require('pdfkit-table');

const patienteModel = require('../models/patienteModel')

const generatePdf = async(req, res) => {
    
    const results = await patienteModel.getAll();
    
    let doc = new PDFDocument({ margin: 30, size: 'A4' });
    // table 
    results.forEach(async element => {
      const table = {
        title: element.nombre,
        subtitle: element.id.toString(),
        headers: ["edad", "sexo", "fecha Nacimiento", "Ciudad", "CP de la Ciudad", "Fecha Inscripcion", "Hospital de origen","Direccion del hospital" , "Tutor", "Telefono"],
        rows: [
          [ element.edad, element.sexo, element.fechaNac.toString().slice(0,15), element.ciudadOrigen_fk,element.cp,element.fechaInscripcion.toString().slice(0,15), element.hospitalOrigen_fk, element.direccion,element.nombreTutor,element.telefonoTutor],
        ],
        
      };

      await doc.table(table, { 
        width: 500,
      })
    });
    
    
    doc.pipe(res);
    console.log("PDF generado con exito!!")
    // done!
    doc.end();

}



module.exports = generatePdf

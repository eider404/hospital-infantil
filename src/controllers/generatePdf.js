const PDFDocument = require('pdfkit-table');

const patienteModel = require('../models/patienteModel')

const generatePdf = async(req, res) => {
    var numeroDeTablasGenerados = 2;
    const results = await patienteModel.getAll();
    
    let doc = new PDFDocument({ margin: 30, size: 'A4' });

    doc.text('', 50, 70);
    doc.font("Helvetica-Bold").fontSize(20);
    doc.text("Lista de Pacientes");
    doc.moveDown();
    doc.font("Helvetica").fontSize(16);
    doc.text("Información personal de los pacientes");
    doc.moveDown();

    
    for (const element of results) {
      const table = {
        title: element.nombre,
        subtitle: element.id.toString(),
        headers: ["edad", "sexo", "fecha Nacimiento", "Ciudad", "CP de la Ciudad", "Fecha Inscripcion", "Hospital de origen","Direccion del hospital" , "Tutor", "Telefono"],
        rows: [
          [ element.edad, element.sexo, element.fechaNac.toString().slice(0,15), element.nombreCiudad, element.cpCiudad, element.fechaInscripcion.toString().slice(0,15), element.nombreHospital, element.direccionHospital,element.nombreTutor,element.telefonoTutor],
        ],
        
      };

      await doc.table(table, { 
        width: 500,
      })
      
      if(numeroDeTablasGenerados % 6 == 0){
        await doc.addPage();
      }
      numeroDeTablasGenerados++;
    };
    
    
    doc.pipe(res);
    console.log("PDF generado con exito!!")
    // done!
    doc.end();

}



module.exports = generatePdf

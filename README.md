# Hospital Infantil 🤖

Este es un proyecto consiste en realizar un CRUD para registrar, consultar, editar y eliminar a los pacientes de un hospital infantil, además de poder generar un PDF con la información de los todos pacientes.

## Instalación  🪛🔩

#### Requisitos:
1. Node.js (Versión 18.12.1 que yo usé)
2. Servidor MySQL

#### Procedimiento:
1. Crear la base de datos  'HospitalInf' en su servidor MySQL, puedes usar el código [DB.sql](https://github.com/eider404/hospital-infantil/blob/main/DB.sql "DB.sql") y pégalo en su servidor MySQL.
2. Configure el archivo [db.js](https://github.com/eider404/hospital-infantil/blob/main/src/db.js "db.js") según la configuración de su servidor MySQL.
```javascript
const pool = mysql.createPool({
  host: 'localhost',		//modificar
  user: 'root',				 //modificar
  password: '', 			//modificar
  database: 'HospitalInf'
});
```

3. Instala las dependencias desde la raíz del proyecto y ejecuté el siguiente comando en la terminal:
```bash
npm install
```

4. Ejecute el programa con el siguiente comando en la terminal. (Asegúrese que el puerto 3000 de su equipo no este en uso)
```bash
node src/app.js
```
output:
```bash
SERVER RUNNING...
```


## Resultado 👾

#### Modelo de la DB:
![file](https://i.postimg.cc/SRXBQ3fZ/Captura-desde-2023-04-16-21-11-31.png)

#### Video del funcionamiento:
[![Alt text](https://techwiser.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-06-at-3.18.28-PM.jpg)](https://youtu.be/lFvpr09H3kQ)



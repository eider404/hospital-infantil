CREATE DATABASE HospitalInf;
USE HospitalInf;

--
-- Tabla `Ciudad`
--

CREATE TABLE `Ciudad` (
  `idCiudad` int(11) NOT NULL PRIMARY KEY,
  `nombreCiudad` varchar(64) NOT NULL,
  `estadoCiudad` varchar(64) NOT NULL,
  `cpCiudad` mediumint(9) NOT NULL
) ;

INSERT INTO `Ciudad` (`idCiudad`, `nombreCiudad`, `estadoCiudad`, `cpCiudad`) VALUES (1, 'Merida', 'Yucatan', 97000);
INSERT INTO `Ciudad` (`idCiudad`, `nombreCiudad`, `estadoCiudad`, `cpCiudad`) VALUES (2, 'Valladolid', 'Yucatan', 97780);
INSERT INTO `Ciudad` (`idCiudad`, `nombreCiudad`, `estadoCiudad`, `cpCiudad`) VALUES (3, 'Progreso', 'Yucatan', 97320);
INSERT INTO `Ciudad` (`idCiudad`, `nombreCiudad`, `estadoCiudad`, `cpCiudad`) VALUES (4, 'Tizimín', 'Yucatan', 97700);


--
-- Tabla `Hospital`
--

CREATE TABLE `Hospital` (
  `idHospital` int(11) NOT NULL PRIMARY KEY,
  `nombreHospital` varchar(64) NOT NULL,
  `direccionHospital` varchar(64) NOT NULL
);

INSERT INTO `Hospital` (`idHospital`, `nombreHospital`, `direccionHospital`) VALUES (1, 'Hospital Regional', 'calle 70 x 41 y 43');
INSERT INTO `Hospital` (`idHospital`, `nombreHospital`, `direccionHospital`) VALUES (2, 'Childrens H. Merida', 'calle 85 x 30 y 40');
INSERT INTO `Hospital` (`idHospital`, `nombreHospital`, `direccionHospital`) VALUES (3, 'Centro comunitario Infantil', 'calle 50 x 59 y 61');
INSERT INTO `Hospital` (`idHospital`, `nombreHospital`, `direccionHospital`) VALUES (4, 'Hospital Regional Mérida', 'calle 30 x 71 y 73');
INSERT INTO `Hospital` (`idHospital`, `nombreHospital`, `direccionHospital`) VALUES (5, 'Hospitales Y Quirofanos Del Sureste', 'calle 70 x 59 y 61');
INSERT INTO `Hospital` (`idHospital`, `nombreHospital`, `direccionHospital`) VALUES (6, 'Hospital Faro del Mayab Grupo Christus Muguerza', 'calle 40 x 41 y 43');
INSERT INTO `Hospital` (`idHospital`, `nombreHospital`, `direccionHospital`) VALUES (7, 'Clinica Mexico', 'calle 22 x 59 y 61');
INSERT INTO `Hospital` (`idHospital`, `nombreHospital`, `direccionHospital`) VALUES (8, 'CAMED CUPULES', 'calle 60 x 30 y 40');
INSERT INTO `Hospital` (`idHospital`, `nombreHospital`, `direccionHospital`) VALUES (9, 'Hospital de linda vista', 'calle 52 x 41 y 43');


--
-- Tabla `Paciente`
--

CREATE TABLE `Paciente` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(64) NOT NULL,
  `edad` tinyint(4) NOT NULL,
  `sexo` varchar(1) NOT NULL,
  `fechaNac` date NOT NULL,
  `ciudadOrigen_fk` int(11) NOT NULL,
  FOREIGN KEY (ciudadOrigen_fk) REFERENCES Ciudad(idCiudad),
  `fechaInscripcion` datetime NOT NULL,
  `hospitalOrigen_fk` int(11) NOT NULL,
  FOREIGN KEY (ciudadOrigen_fk) REFERENCES Hospital(idHospital),
  `nombreTutor` varchar(64) NOT NULL,
  `telefonoTutor` bigint(20) NOT NULL
);
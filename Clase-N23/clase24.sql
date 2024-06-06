


create database computadora;

create database if not exists computadora;

use computadora;
CREATE TABLE alumnos (
dni int(11) primary key,
nombre varchar(30),
apellido varchar(30),
fecha_nac date
);

describe alumnos;

CREATE TABLE `computadora`.`notas` (
  `id_nota` INT NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `apellido` VARCHAR(50) NOT NULL,
  `calificacion` INT NOT NULL,
  `Grado` VARCHAR(10) NULL,
  PRIMARY KEY (`id_nota`));
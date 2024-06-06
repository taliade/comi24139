Crear la Tabla
sql
Copiar código
CREATE TABLE empleados (
    dni VARCHAR(10) PRIMARY KEY,
    apellido VARCHAR(50),
    nombre VARCHAR(50),
    fecha_nac DATE
);
Insertar los Datos
sql
Copiar código
INSERT INTO empleados (dni, apellido, nombre, fecha_nac) VALUES
('12.345.678', 'Gómez', 'Juan', STR_TO_DATE('25/09/1945', '%d/%m/%Y')),
('23.456.789', 'Fernández', 'Ana', STR_TO_DATE('12/07/1973', '%d/%m/%Y'));
Explicación
Creación de la tabla empleados:

La columna dni es de tipo VARCHAR(10) y se establece como la clave primaria.
Las columnas apellido y nombre son de tipo VARCHAR(50).
La columna fecha_nac es de tipo DATE.
Inserción de los datos:

Los valores para dni, apellido, nombre y fecha_nac se insertan en la tabla.
La función STR_TO_DATE se utiliza para convertir las fechas de formato dd/mm/yyyy a un formato de fecha compatible con MySQL.
Ejecución del Script
Puedes ejecutar este script en tu entorno MySQL, ya sea mediante MySQL Workbench, la línea de comandos de MySQL, o cualquier otro cliente de base de datos que prefieras.

Ejemplo Completo
Aquí está el script completo para tu referencia:

sql
Copiar código
-- Crear la tabla
CREATE TABLE empleados (
    dni VARCHAR(10) PRIMARY KEY,
    apellido VARCHAR(50),
    nombre VARCHAR(50),
    fecha_nac DATE
);

-- Insertar los datos
INSERT INTO empleados (dni, apellido, nombre, fecha_nac) VALUES
('12.345.678', 'Gómez', 'Juan', STR_TO_DATE('25/09/1945', '%d/%m/%Y')),
('23.456.789', 'Fernández', 'Ana', STR_TO_DATE('12/07/1973', '%d/%m/%Y'));
Asegúrate de que tu servidor MySQL esté ejecutándose y que tengas acceso adecuado para crear tablas y realizar inserciones. Este ejemplo debería proporcionarte una base sólida para trabajar con tablas de empleados en MySQL.
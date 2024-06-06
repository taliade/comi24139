create database local;
use local;

-- tabla
create table empleados(
id_empleado int primary key,
nombre_empleado varchar(50) not null,
apellido_empleado varchar(50) not null,
correo varchar(100) not null
);

insert into empleados(id_empleado,nombre_empleado, apellido_empleado,correo) values
	(1,'Juan','Perez','juan.perez@example.com'),
    (2,'Maria', 'Gomez' ,' maria.gomez@example.com'),
    (3, 'Luis', ' Martinez','luis.martines@example.com');
    
    insert into empleados(id_empleado,nombre_empleado, apellido_empleado,correo) values
    ('4', 'Talia','Rodrigues', 'talia.rodrigues@gmail.com');

select *  
from empleados;


-- Stock 
create table stock( 
id_producto int primary key,
nombre_producto varchar(100) not null,
cantidad int not null,
precio decimal(10,2)
);

insert into stock(id_producto, nombre_producto, cantidad, precio)values
	(1, 'Producto A', 10 , 19.99),
    (2, 'Producto B' , 5 , 99.99),
    (3, 'Producto C', 20, 89.99);
    
select id_producto, cantidad
from stock;

-- Consultas internas 
select nombre_producto, precio
from stock;
select nombre_empleado, correo, id_empleado
from empleados
order by id_empleado desc;


UPDATE empleados
SET nombre_empleado = 'Tomas',
    apellido_empleado = 'Gonzalez',
    correo = 'tomas.gonza@mail.com'
WHERE id_empleado = 5;

    
    
Delete from stock
	where nombre_producto like 'ProductoC';
    
    
    
create table ventas(
id_venta int primary key,
fecha date,
id_empleado int, 
id_producto int,
cantidad int,
total decimal (10,2),
foreign key(id_empleado) references empleados(id_empleado),

foreign key(id_producto) references stock (id_producto)
); 

insert into ventas(id_venta, fecha, id_empleado, id_producto, cantidad, total) values
	(1, '2023-10-01', 1,1,3, 60.00),
    (2, '2023-10-02', 2, 2 , 1 , 9.99),
    (3, '2023-10-03', 3,3,5, 124.95);
    
    select * from ventas;
    
   select v.id_venta, v.fecha, e.nombre_empleado, e.apellido_empleado, s.nombre_producto
   from ventas v
   join empleados e on v.id_empleado= e.id_empleado
   join stock s on v.id_producto = s.id_producto;
    
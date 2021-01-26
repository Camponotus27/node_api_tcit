/* 

\l -> lista las base de datos
\c name_database -> usa database

*/

-- Creacion de la base de datos
CREATE DATABASE challenge_tcit;

-- Creacion de tabla post
CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT
);

-- insersion de datos de prueba
INSERT INTO post (name, description) VALUES 
('POST 1', 'Hola como estaán'),
('POST 2', 'Hola Post 2'),
('POST 2', 'Hola Post 2.2'),
('POST 3', 'Hola Post 3'),
('POST 4', 'Hola Post 4'),
('POST 5', 'Post 5');





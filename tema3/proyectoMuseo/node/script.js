const mysql = require ("mysql2/promise");

async function main () {
    try {
        let connection = await mysql.createConnection ({
            host: "localhost",
            user: "root",
            password: "4778672jm",
            database: "museo"
        });
        console.log("conexión correcta");


        // ------------------- RETO PROYECTO MUSEO -------------------
        // punto1
        // let sql = `SELECT piezas.nombre, ubicaciones.lugar, prestamos.fecha_fin,
        //             dueños.nombre, dueños.apellidos, dueños.email FROM piezas 
        //             JOIN prestamos ON piezas.prestamo_id = prestamos.prestamo_id
        //             JOIN dueños ON prestamos.dueño_id = dueños.dueño_id
        //             JOIN ubicaciones ON piezas.ubicacion_id = ubicaciones.ubicacion_id
        //             WHERE piezas.posesion = 'prestamo'`;
        // let [result] = await connection.query(sql);
        // console.log("datos obtenidos");
        // console.log(result);

        // punto2
        // let sql = `SELECT colecciones.tipo, COUNT(*) AS total FROM piezas
        //             JOIN colecciones ON piezas.coleccion_id = colecciones.coleccion_id
        //             GROUP BY colecciones.tipo
        //             ORDER BY colecciones.tipo DESC`;
        // let [result] = await connection.query(sql);
        // console.log("datos obtenidos");
        // console.log(result);

    } catch (error) {
        console.log(error);
        await connection.end();
    };
};
main();
const mysql = require ("mysql2/promise");

async function main () {
    try {
        let connection = await mysql.createConnection ({
            host: "localhost",
            user: "root",
            password: "4778672jm",
            database: "escuela"
        });
        console.log("conexión correcta");


        // ------------------- RETO 1 -------------------
            // punto 4
        // - Eliminar columna
        // let sql = "ALTER TABLE direccion DROP COLUMN ciudad";
        // let [result] = await connection.query(sql);
        // console.log("columna eliminada");
        // console.log(result);

        // - Añadir columna
        // let sql = "ALTER TABLE direccion ADD COLUMN pais VARCHAR(45)";
        // let [result] = await connection.query(sql);
        // console.log("columna añadida");
        // console.log(result);

            // punto 5
        // let sql = "DROP TABLE direccion";
        // let [result] = await connection.query(sql);
        // console.log("tabla eliminada");
        // console.log(result);

            // punto 6
        // let sql = "UPDATE marks SET mark = 0";
        // let [result] = await connection.query(sql);
        // console.log("modificada todas las notas a 0");
        // console.log(result);

            // punto 7
        // let sql = "SELECT first_name, last_name FROM teachers";
        // let [result] = await connection.query(sql);
        // console.log("mostrando nombre y apellido de estudiantes");
        // console.log(result);

            // punto 8
        // let sql = "SELECT * FROM teachers";
        // let [result] = await connection.query(sql);
        // console.log("mostrando todos los datos de profesores");
        // console.log(result);


        // ------------------- RETO 2 -------------------
            // punto 1
        // const sql = `DELETE FROM marks WHERE date < DATE_SUB(CURDATE(), INTERVAL 10 YEAR)`;
        // let [result] = await connection.query(sql);
        // console.log("eliminada las notas con fecha de mas de 10 años");
        // console.log(result);

            // punto 2
        // let sql = "UPDATE marks SET mark = 5 WHERE mark < 5";
        // let [result] = await connection.query(sql);
        // console.log("modificada a 5 todas las notas < 5");
        // console.log(result);

    } catch (error) {
        console.log(error);
        await connection.end();
    };
};
main();
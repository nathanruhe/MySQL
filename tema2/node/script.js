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
            // punto 1
        // let sql = "SELECT AVG(mark) FROM marks WHERE subject_id = 1";
        // let [result] = await connection.query(sql);
        // console.log("nota media de asignatura 1");
        // console.log(result);

            // punto 2
        // let sql = "SELECT COUNT(*) FROM students";
        // let [result] = await connection.query(sql);
        // console.log("numero total alumnos");
        // console.log(result);

            // punto 3
        // let sql = "SELECT * FROM grupos";
        // let [result] = await connection.query(sql);
        // console.log("mostrando tabla grupos");
        // console.log(result);

            // punto 4
        // let sql = "DELETE FROM marks WHERE mark > 5 AND YEAR(date) = YEAR(CURDATE()) - 1";
        // let [result] = await connection.query(sql);
        // console.log("eliminada notas > 5 con fecha del año pasado");
        // console.log(result);

            // punto 5
        // let sql = "SELECT * FROM students WHERE YEAR(año_ingreso) = YEAR(CURDATE())";
        // let [result] = await connection.query(sql);
        // console.log("mostrando alumnos de este año");
        // console.log(result);

            // punto 6
        // let sql = "SELECT subject_id, COUNT(teacher_id) FROM subject_teacher GROUP BY subject_id";
        // let [result] = await connection.query(sql);
        // console.log("mostrando numero de profesores por asignatura");
        // console.log(result);


        // ------------------- RETO 2 -------------------
            // punto 1
        // const sql = "SELECT student_id, mark FROM marks WHERE(student_id BETWEEN 1 AND 20) OR(mark > 8 AND YEAR(date) = YEAR(CURDATE()) - 1)";
        // let [result] = await connection.query(sql);
        // console.log("mostrando id y nota alumnos entre 1 y 20, o notas > 8 con fecha del año pasado");
        // console.log(result);

            // punto 2
        // let sql = "SELECT subject_id, AVG(mark) FROM marks WHERE date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR) GROUP BY subject_id";
        // let [result] = await connection.query(sql);
        // console.log("mostrando media notas por asignatura en el ultimo año");
        // console.log(result);

            // punto 3
        // let sql = "SELECT student_id, AVG(mark) FROM marks WHERE date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR) GROUP BY student_id";
        // let [result] = await connection.query(sql);
        // console.log("mostrando media notas por alumno en el ultimo año");
        // console.log(result);

    } catch (error) {
        console.log(error);
        await connection.end();
    };
};
main();
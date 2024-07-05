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
        // let sql = `SELECT first_name, last_name, title FROM students
        //             JOIN marks ON students.student_id = marks.student_id
        //             JOIN subjects ON marks.subject_id = subjects.subject_id`;
        // let [result] = await connection.query(sql);
        // console.log("datos obtenidos");
        // console.log(result);

        // ------------------- RETO 2 -------------------
        // let sql = `SELECT first_name, last_name, title FROM teachers
        //             JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id
        //             JOIN subjects ON subject_teacher.subject_id = subjects.subject_id`;
        // let [result] = await connection.query(sql);
        // console.log("datos obtenidos");
        // console.log(result);

        // ------------------- RETO 3 -------------------
        // let sql = `SELECT COUNT(DISTINCT marks.student_id) AS total,
        //             title, first_name, last_name FROM subjects
        //             JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id
        //             JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id
        //             JOIN marks ON subjects.subject_id = marks.subject_id
        //             GROUP BY title, first_name, last_name`;
        // let [result] = await connection.query(sql);
        // console.log("datos obtenidos");
        // console.log(result);

    } catch (error) {
        console.log(error);
        await connection.end();
    };
};
main();
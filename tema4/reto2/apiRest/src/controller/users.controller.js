const {pool} = require("../database")

// UTILIZANDO PARAMS
async function media (request, response) {
    try {
        let sql;
        let params;

        sql = `SELECT AVG(mark) AS media FROM marks WHERE student_id = ?`;
        params = [request.params.id];
        
        let [result] = await pool.query(sql, params);
        response.send(result);

    } catch(error) {
        console.log(error);
    };
};

async function apuntadas (request, response) {
    try {
        let sql;
        let params;

        // UTILIZANDO QUERY
        if (request.query.id == null) {
            sql = `SELECT students.first_name, students.last_name, subjects.title AS asignatura FROM students
                    JOIN marks ON marks.student_id = students.student_id
                    JOIN subjects ON subjects.subject_id = marks.subject_id`;
        } else {
            sql = `SELECT subjects.title AS asignatura FROM subjects
                    JOIN marks ON marks.subject_id = subjects.subject_id 
                    WHERE marks.student_id = ?`;
            params = [request.query.id];
        };

        let [result] = await pool.query(sql, params);
        response.send(result);

    } catch(error) {
        console.log(error);
    };
};

async function impartidas (request, response) {
    try {
        let sql;
        let params;

        // UTILIZANDO QUERY
        if (request.query.id == null) {
            sql = `SELECT teachers.first_name, teachers.last_name, subjects.title AS asignatura FROM teachers
                    JOIN subject_teacher ON subject_teacher.teacher_id = teachers.teacher_id
                    JOIN subjects ON subjects.subject_id = subject_teacher.subject_id`;
        } else {
            sql = `SELECT subjects.title AS asignatura FROM subjects
                    JOIN subject_teacher ON subject_teacher.subject_id = subjects.subject_id
                    WHERE subject_teacher.teacher_id = ?`;
            params = [request.query.id];
        };

        let [result] = await pool.query(sql, params);
        response.send(result);

    } catch(error) {
        console.log(error);
    };
};


module.exports = {media, apuntadas, impartidas};
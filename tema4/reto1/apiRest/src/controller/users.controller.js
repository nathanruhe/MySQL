const {pool} = require("../database")

async function getAllUser (request, response) {
    try {
        let sql;
        let params;
        
        // UTILIZANDO QUERY
        if (request.query.id == null) {
            sql = `SELECT * FROM students`;
        } else {
            sql = `SELECT * FROM students WHERE student_id = ?`;
            params = [request.query.id];
        };

        let [result] = await pool.query(sql, params);
        response.send(result);

    } catch(err) {
        console.log(err);
    };
};

// UTILIZANDO PARAMS
async function getUser (request, response) {
    try {
        let sql;
        let params;

        sql = `SELECT * FROM students WHERE student_id = ?`;
        params = [request.params.id];
        
        let [result] = await pool.query(sql, params);
        response.send(result);

    } catch(error) {
        console.log(error);
    };
};

async function postUser(request, response) {
    try {
        let sql;
        let params;

        sql = `INSERT INTO students (first_name, last_name, group_id, año_ingreso)
                             VALUES (?, ?, ?, ?)`;
        params = [
            request.body.first_name,
            request.body.last_name,
            request.body.group_id,
            request.body.año_ingreso];

        let [result] = await pool.query(sql, params);
        response.send(result);

    } catch (error) {
        console.log(error);
    };            
};

async function putUser (request, response) {
    try {
        let sql;
        let params;
        
        sql = `UPDATE students SET 
                    first_name = COALESCE(?, first_name), 
                    last_name = COALESCE(?, last_name), 
                    group_id = COALESCE(?, group_id), 
                    año_ingreso = COALESCE(?, año_ingreso)
                WHERE student_id = ?`;
        params = [
            request.body.first_name,
            request.body.last_name,
            request.body.group_id,
            request.body.año_ingreso,
            request.body.student_id];

        let [result] = await pool.query(sql, params);
        response.send(result);

    } catch(error) {
        console.log(error);
    };
};

async function deleteUser (request, response) {
    try {
        let sql;
        let params;

        sql = `DELETE FROM students WHERE student_id = ?`;
        params = [request.body.student_id];

        let [result] = await pool.query(sql, params);
        response.send(result); 

    } catch(error) {
        console.log(error);
    };
};


module.exports = {getAllUser, getUser, postUser, putUser, deleteUser};

const sql = require('../config/database');

const createTable = async () => {
    try {
        let [results] = await sql.query("SELECT * FROM TUTOR");
        return results;
    } catch (error) {
        console.log(err);
    }
}

const createNewStudent = async (SID, SNAME, EMAIL, Tut_id) => {
    try {
        let [results, fiedls] = await sql.query(
        `INSERT INTO STUDENT (SID, SNAME, EMAIL, Tutor_id)
        VALUES (?, ?, ?, ?)`,
        [SID, SNAME, EMAIL, Tut_id],
    );
    } catch (error) {
        console.log(error);
    }
}  

const updateStudent = async (SID, SNAME, EMAIL, Tutor_id) => {
    try {
        let [results] = await sql.query(
            `
            UPDATE STUDENT
            SET SNAME = ?,
            EMAIL = ?,
            Tutor_id = ?

            WHERE SID = ?
            `, [SNAME, EMAIL, Tutor_id, SID]
        );
    } catch (error) {
        console.log(error);
    }
}

const deleteStudent = async (SID) => {
    let [rs] = await sql.query(`DELETE FROM STUDENT
                                WHERE SID = ?;`, [SID]);
}



// const run = async () => {
//     const rs = await createTable(); // Thêm await ở đây để đợi kết quả thật
//     console.log("DATA: ", rs);
// }

// run();


module.exports = {
    createTable, createNewStudent, updateStudent, deleteStudent
}
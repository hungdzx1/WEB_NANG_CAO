const express = require('express');
const app = express();

const { createTable, createNewStudent, updateStudent, deleteStudent} = require('./service/CRUD');

const port = 3000;

app.use(express.json()) //convert data to json
app.use(express.urlencoded({extended: true})) //for form data

app.get('/tutor', async (req, res) => {
    try {
        const rs = await createTable();

         return res.status(200).json({
            status: "success",
            message: "Done",
            data: rs,
        });

    } catch (error) {
        console.log(error);
    }
})

app.put('/create-new-student', async (req, res) => {
    let { SID, SNAME, EMAIL, Tut_id } = req.body;

    try {
        await createNewStudent(SID, SNAME, EMAIL, Tut_id);

        return res.json({
            status: "success"
        })
    } catch (error) {
        console.log(error);
    }
});

app.post('/update-student', async (req, res) => {
    let { SID, SNAME, EMAIL, Tut_id } = req.body;

    try {
        await updateStudent(SID, SNAME, EMAIL, Tut_id);

        return res.json({
            status: "update success"
        })
    } catch (error) {
        console.log(error);
    }
});

app.delete('/delete-student', async (req, res) => {
    let SID = req.body.SID;
    try {
        await deleteStudent(SID);

        return res.status(200).json({
            message: "delete success"
        });
    } catch (error) {
        console.log(error);
    }
})



app.listen(port, () => {
    console.log("Server running on port: ", port);
});
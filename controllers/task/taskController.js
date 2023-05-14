const db = require('../../config/db');

class TaskController {

    async createTask(req, res) {
        const data = req.body;
        //TODO Trazer userID do FrontEnd
        const userID = 1;
        const dateCreation = new Date();
        const sqlCreateTask = `INSERT INTO task (title, description, tagID, priorityID, dateCreation, userID) VALUES (?, ?, ?, ?, ?, ?)`;
        const [row] = await db.promise().query(sqlCreateTask, [data.title, data.description, data.tagID, data.priorityID, dateCreation, userID]);
        return res.status(200).json(row);
    }

    async getDataTasks(req, res) {
        const sqlGetTasks = `SELECT * FROM task`;
        const [row] = await db.promise().query(sqlGetTasks);
        return res.status(200).json(row);
    }

    async deleteTask(req, res) {
        const { id } = req.params;
        const sqlDeleteTask = `DELETE FROM task WHERE taskID = ?`;
        const [row] = await db.promise().query(sqlDeleteTask, [id]);
        return res.status(200).json(row);
    }

    async updateTask(req, res) {
        const data = req.body;
        const { id } = req.params;

        console.log(data);

        const sqlUpdateTask = `UPDATE task SET title = ?, description = ?, tagID = ?, priorityID = ?, finished = ? WHERE taskID = ?`;
        const [row] = await db.promise().query(sqlUpdateTask, [data.title, data.description, data.tagID, data.priorityID, data.finished, id]);
        return res.status(200).json(row);
    }

    async updateFavoriteTask(req, res) {
        const { favorite } = req.body;
        const { id } = req.params;

        const sqlFavoriteTask = `UPDATE task SET favorite = ? WHERE taskID = ?`;
        const [row] = await db.promise().query(sqlFavoriteTask, [favorite, id]);
        return res.status(200).json(row);
    }
}

module.exports = TaskController;

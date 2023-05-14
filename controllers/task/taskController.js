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
        const sqlCountTasks = `SELECT COUNT(*) FROM task`;
        const sqlCountTasksOpen = `SELECT COUNT(*) FROM task WHERE finished = 0`;
        const sqlCountTasksFinished = `SELECT COUNT(*) FROM task WHERE finished = 1`;
        const [getTasks] = await db.promise().query(sqlGetTasks);
        const [countTasks] = await db.promise().query(sqlCountTasks);
        const [countTasksOpen] = await db.promise().query(sqlCountTasksOpen);
        const [countTasksFinished] = await db.promise().query(sqlCountTasksFinished);
        const data = {
            tasks: getTasks,
            count: countTasks[0]['COUNT(*)'],
            countOpen: countTasksOpen[0]['COUNT(*)'],
            countFinished: countTasksFinished[0]['COUNT(*)']
        }
        return res.status(200).json(data);
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

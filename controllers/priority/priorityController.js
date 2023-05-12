const db = require('../../config/db');

class PiorityController {

    async getDataPrioritys(req, res) {
        const sqlGetTasks = `SELECT * FROM priority`;
        const [row] = await db.promise().query(sqlGetTasks);
        return res.status(200).json(row);
    }

    async updatePriorityTask(req, res) {
        const { taskID, priorityID } = req.body;
        const sqlFavoriteTask = `UPDATE task SET priorityID = ? WHERE taskID = ?`;
        const [row] = await db.promise().query(sqlFavoriteTask, [priorityID, taskID]);
        return res.status(200).json(row);
    }
}

module.exports = PiorityController;

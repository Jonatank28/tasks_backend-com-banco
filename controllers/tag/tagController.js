const db = require('../../config/db');

class TagController {

    async getDataTags(req, res) {
        const sqlGetTasks = `SELECT * FROM tag`;
        const [row] = await db.promise().query(sqlGetTasks);
        return res.status(200).json(row);
    }

    async updateTag(req, res) {
        const { taskID, tagID } = req.body;
        const sqlUpdateTag = `UPDATE task SET tagID = ? WHERE taskID = ?`;
        const [row] = await db.promise().query(sqlUpdateTag, [tagID, taskID]);
        return res.status(200).json(row);
    }
}

module.exports = TagController;

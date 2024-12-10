const pool = require('../database/connection');

async function getCourses() {
    try {
        const result = await pool.query(
            `SELECT * FROM public.course`
        )

        return result.rows;
    } catch (err) {
        console.log(`Error while getting courses: ${err}`);
        return false;
    }
}

async function getLevels() {
    try {
        const result = await pool.query(
            `SELECT * FROM public.level`
        )

        return result.rows;
    } catch (err) {
        console.log(`Error getting levels: ${err}`);
        return false;
    }
}

async function getContent(level_id, course_id) {
    try {
        const result = await pool.query(
            `SELECT * FROM public.content WHERE course_id = $1 AND level_id = $2`, [course_id, level_id]
        )

        return result.rows;
    } catch (err) {
        console.log(`Error getting content: ${err}`);
        return false;
    }
}

module.exports = {getCourses, getLevels, getContent}
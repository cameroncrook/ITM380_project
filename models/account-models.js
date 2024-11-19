const pool = require('../database/connection');

// register new account
async function registerAccount(account_username, account_email, account_password) {
    try {
        const sql = await pool.query(
            `
            INSERT INTO public.account (account_username, account_email, account_password)
            VALUES ($1, $2, $3);
            `, [account_username, account_email, account_password]
        )

        return true;
    } catch (err) {
        console.log(`Error while registering new user: ${err}`);
        return false;
    }
}


// login
async function getAccount(account_email) {
    try {

        const result = await pool.query(
            `SELECT * FROM public.account WHERE account_email = $1;`, [account_email]
        )

        return result.rows[0];
    } catch (err) {
        console.log(`Error while getting user: ${err}`);
        return false;
    }
}

module.exports = { registerAccount, getAccount };

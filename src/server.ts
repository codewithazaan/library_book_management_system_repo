import { Pool } from "pg";
import app from "./app";
import config from "./config";
import { pool } from "./db/db";
const startServer = async() =>{

try {

    const time = await pool.query("SELECT NOW()")
    console.log("Database Connected Successfully:",time.rows[0].now)

    app.listen(config.port, ()=>{
    console.log(`Server Is Listening on the port ${config.port}`)
})
} catch (error) {
    console.error("Failed To Fetch Server!!", error)
}
}
startServer();
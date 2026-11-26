import dotenv from "dotenv";
import path from "path";

dotenv.config({path: path.join(process.cwd(), ".env")});

const p = process.env;
const config = {
    port : p.PORT,
    node_env:p.NODE_ENV,
    connection_string:p.DATABASE_URL,
    jwt_secret:p.JWT_SECRET
}
export default config;
import mongoose from "mongoose";
import config from "config";

async function db() {
    const dbUrl = config.get("dbUrl") as string;
    try {
        await mongoose
            .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log(`DB connected to ${dbUrl}`);
            });
    } catch (e) {
        console.error(e);
    }
}

export default db;
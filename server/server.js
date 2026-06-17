import createApp from "./src/app.js";
import env from "./src/config/env.js";
import logger from "./src/config/logger.js";
import { connecDB } from "./src/db/db.js";

const app = createApp();

function startServer() {
    connecDB().then(() => {
        app.listen(env.PORT, () => {
            logger.info({ port: env.PORT }, 'Server is running');
        });
    }).catch((err) => {
        logger.error({ error: err }, "error while running server");
    })
};


startServer();
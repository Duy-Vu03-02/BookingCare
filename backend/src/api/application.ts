import { PORT } from "@common/config/config.environment"
import { DatabaseAdapter } from "@common/infrastructure/database.adapter"
import { ExpressServer } from "./server";

export class Application {
    public static createApplication = async(): Promise<ExpressServer> => {
        await DatabaseAdapter.connection();

        Application.registerEvent();
        Application.registerCron();

        const expressServer = new ExpressServer();
        expressServer.setUp(PORT);

        return expressServer;
    }

    public static registerEvent = () => {

    }

    public static registerCron = () => {

    }
}
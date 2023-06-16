import Express from "express"
import logger from "./utils/logger.ts";
import {LogTypes} from "./data/LogData.ts";

export default class App {
    public express: Express.Application;
    public logger: logger;

   // const logger = new logger(LogTypes.info);
    constructor() {
        this.express = Express();
    }

    public async Init() {
    this.Routes();
    }

    private Middleware(): void {

    }

    private Routes(): void {
        this.express.get('/', (req, res) => {
            res.send('this is a twitch bot!')
        });
        //confirms port listening (will be adjusted later on to work correctly for application)
       this.express.listen(3000, () => {
             this.logger.info('listening on port 3000');
            });

       //undefined route handling
        this.express.use('*', (req, res, next) => {
            res.send("Please ensure that the url is correct.");
        });

        }





}
const app = new App();
app.Init()


import Express from "express"
import Logger from "./utils/logger.ts";
import dotenv from "dotenv"



dotenv.config();



const {
   PORT
        } = process.env


export default class App {
    public express: Express.Application;
    public logger: Logger;


    constructor() {
        this.express = Express();
        this.Routes()
        this.logger = new Logger();

    }

    public async Init() {

    }

    private Middleware(): void {

    }

    private Routes(): void {
        this.express.get('/', (req, res) => {
            res.send('this is a twitch bot!')
        });
        //confirms port listening (will be adjusted later on to work correctly for application)
       this.express.listen(PORT, () => {
           this.logger.info(`listening on port ${PORT}`);
           this.logger.debug(`debug`);
           this.logger.verbose(`verbose`)
           this.logger.warn(`warn`)
           this.logger.error(`error`)
            //this is just for logger testing keeping it for now as i play with verbosity
       });

       //undefined route handling
        this.express.use('*', (req, res, next) => {
            res.send("Please ensure that the url is correct.");
        });

    }





}



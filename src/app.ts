import express from "express";
import {Server} from "http"
import { serverLogger } from "./utility/serverLogger";
import helmet from "helmet";
import cors from "cors";
import { loggerMiddleWare } from "./middlewares/logger";
import { connectDB } from "./db/connection";
import { apiRouter } from "./routes/api-routes";


export class Application {

  instance = express();

  get port() {
    return this.instance.get('port');
  }

  constructor() {
    this.instance.set('port', 4999);
  }

  static init() {
    const app = new Application();
    const server = new Server(app.instance);

    server.on('listening', () => {
      const addr = server.address();
      const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr!.port;
      serverLogger.info('Listening on ' + bind);
    });

   
    app
      .load()
      .then(() => {
        server.listen(app.port, () => {
          serverLogger.info(`Swagger URL "/api-docs/swagger"`);
        });
      })
      .catch((error) => {
        console.log(error);
        
        process.exit(1);
      });
  }

  async load() {
    this.initConfig();
    await connectDB()
    this.instance.use('/api', apiRouter);

  }

  initConfig() {
    //Api Middleware

    if (process.env.NODE_ENV === 'development') {
      this.instance.use(cors());
    }

    this.instance.use(loggerMiddleWare);

    // this.instance.use(apiMiddleware);

    // //Initialize swagger
    // this.initSwagger();

    //Set well-known security-related HTTP headers
    this.instance.use(helmet());
    this.instance.disable('x-powered-by');
    this.instance.use(express.json({limit: '50mb'}));
    this.instance.use(express.urlencoded({extended: true, limit: '50mb'}));
  }

  initSwagger() {
    /** Swagger Implementation Start  */

    // this.instance.use('/api-docs/swagger', express.static('swagger'));
    // this.instance.use('/api-docs/swagger/assets', express.static('node_modules/swagger-ui-dist'));
    // this.instance.use(
    //   swagger.express({
    //     definition: {
    //       info: {
    //         title: 'My api',
    //         version: '1.0'
    //       },
    //       basePath: '/api/v1',
    //       schemes: ['http']
    //     }
    //   })
    // );
    
    /** Swagger Implementation Ends  */
  }
}
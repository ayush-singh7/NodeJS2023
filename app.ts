import express, { Application } from "express"
import { routes } from "./routes/routes";
import { connect } from "./db/connection";
import { redis } from "./db/redis";

import swaggerUi from 'swagger-ui-express';

import { SwaggerOptions } from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const SWAGGER_OPTIONS: SwaggerOptions = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
      openapi: '3.0.0', // present supported openapi version
      info: {
          title: 'Instagram Api',
          version: '1.0.0',
      },
      components: {
          securitySchemes: {
              BasicAuth: {
                  type: 'http',
                  scheme: 'basic',
              },
              BearerAuth: {
                  type: 'http',
                  scheme: 'bearer',
              },
          },
      },
      parameters: {
          DeviceId: {
              name: 'device_id',
              in: 'header',
              description: 'device id of the user',
              type: 'string',
              example: '123-321-213-333',
          },
          Browser: {
              name: 'browser',
              in: 'header',
              description: 'User agent',
              type: 'string',
              example: 'Chrome',
          },
      },
  },
  apis: ['./swagger/*'], // files containing annotations as above
};


const socialAppAPISpecs = swaggerJSDoc(SWAGGER_OPTIONS);

const app: Application = express()

app.use(`/api-docs`, swaggerUi.serve, swaggerUi.setup(socialAppAPISpecs));



app.use(express.json())

routes(app);

app.listen(4000, async () => {

    // swaggerDocs(app, 4000)

    console.log("RUNNNG at 4000");
    redis()
    connect()

})
import express, { Application } from "express";
import * as grpc from '@grpc/grpc-js';
import * as path from 'path';
import * as protoLoader from '@grpc/proto-loader';

const app: Application = express();

const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, 'my_service.proto'), {});

const arrayProto:any = grpc.loadPackageDefinition(packageDefinition).ArrayService;

const client = new arrayProto('localhost:40000', grpc.credentials.createInsecure());

const numbers = [1, 2, 3, 4, 5];


client.ProcessArray({ numbers }, (error:any, response:any) => {
  if (!error) {
    console.log('Response:', response.message);
  } else {
    console.error('Error:', error.message);
  }
});




app.listen(3001, () => {

    console.log('listening at port 3001');

    

})

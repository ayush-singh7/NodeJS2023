import express, { Application } from "express";
import * as grpc from '@grpc/grpc-js';
import * as path from 'path';
import * as protoLoader from '@grpc/proto-loader';
import { log } from "console";

const app: Application = express();

const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, 'my_service.proto'), {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    });

const arrayProto:any = grpc.loadPackageDefinition(packageDefinition);


// Implement the gRPC service
const server = new grpc.Server();

server.addService(arrayProto.ArrayService.service, {
  ProcessArray: (call:any, callback:any) => {
    const numbers = call.request.numbers;
    console.log('Received array:', numbers);

    const sum = numbers.reduce((acc:any, curr:any) => acc + curr, 0);
    const response = { message: `Sum of array elements: ${sum}` };

    callback(null, response);
  },
});



server.bindAsync(`0.0.0.0:${40000}`, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`GRPC Server running at http://0.0.0.0:${40000}`);
    server.start();
});



app.listen(3000, () => {

    console.log('listening at port 3000');
    

})

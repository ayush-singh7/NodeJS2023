import express, { Application } from "express";
import * as grpc from '@grpc/grpc-js';
import * as path from 'path';
import * as protoLoader from '@grpc/proto-loader';

const app: Application = express();

const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, 'my_service.proto'), {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    });

const grpcObject:any = grpc.loadPackageDefinition(packageDefinition).mypackage;

const server = new grpc.Server();

const getData =(call:any, callback:any) => {
    console.log('Received request:', call.request.data);
    // ............
    const responseData = `Received: ${call.request.data}`;
    callback(null, { data: responseData });
}

server.addService(grpcObject.MyService.service, {
    MyRpcMethod: getData,
});




server.bindAsync(`0.0.0.0:${40000}`, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`GRPC Server running at http://0.0.0.0:${40000}`);
    server.start();
});



app.listen(3000, () => {

    console.log('listening at port 3000');
    

})

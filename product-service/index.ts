import express, { Application } from "express";
import * as grpc from '@grpc/grpc-js';
import * as path from 'path';
import * as protoLoader from '@grpc/proto-loader';

const app: Application = express();

const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, 'my_service.proto'), {});

const {MyService}:any = grpc.loadPackageDefinition(packageDefinition).mypackage;


const client = new MyService('localhost:40000', grpc.credentials.createInsecure());

const requestData = 'MY NAME IS AYUSH';

client.MyRpcMethod({ data: requestData }, (error:any, response:any) => {
    if (error) {
      console.error('Error:', error);
      return;
    }
    console.log('Response:', response.data);
});

app.listen(3001, () => {

    console.log('listening at port 3001');

    setTimeout(() => {
        // console.log(client, '---------------');
    }, 1000)

})

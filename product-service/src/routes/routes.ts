import { Server } from '@grpc/grpc-js';
import { Router } from 'express';
import { productControllers } from '../controllers/product.controllers';
import { auth } from '../middlewares/auth';


class Routes {
    private route: Router;

    constructor() {
        this.route = Router();
    }

    /**
     * @description Load All Services
     * @param {Server} grpcServer
     * @param authPackage
     */
    loadAllServices(grpcServer: Server, authPackage: any) {
        // routesV1.loadAllV1Services(grpcServer, authPackage);
    }

    /**
     * @description Load All Routes
     */
    loadAllRoutes() {
        this.route.get('/products',
        auth.basicAuth,
        productControllers.productListing);
        
        return this.route;
    }
}

export const routes = new Routes();

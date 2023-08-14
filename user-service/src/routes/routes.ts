import { Server } from '@grpc/grpc-js';
// import { routesV1 } from './v1/v1.routes';
import { Router } from 'express';
import { onboardingRoutes } from './onboarding/onboarding.routes';
// import { testRoute } from './test.routes';


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
        // testRoute.loadTestServiceDefinition(grpcServer, authPackage);
    }

    /**
     * @description Load All Routes
     */
    loadAllRoutes() {
        this.route.use('/auth', onboardingRoutes.loadAllRoutes());
        
        return this.route;
    }
}

export const routes = new Routes();

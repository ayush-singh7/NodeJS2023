import { Router, Request, Response } from 'express';
import { consolelog, logger } from '../../utils/logger';
import { validate } from '../../middlewares/validate';
import Joi from 'joi';
import { onboardingControllers } from '../../controllers/onboarding.controllers';
import { auth } from '../../middlewares/auth';


class OnboardingRoutes {
    private route: Router;

    constructor() {
        this.route = Router();
    }
    /**
     * @description Load All Services
     * @param {Server} grpcServer
     * @param authPackage
     */
    
    // loadAllV1Services(grpcServer: Server, authPackage: any) {
    //     kycRouteV1.loadServiceDefinition(grpcServer, authPackage);
    // }

    
    loadAllRoutes() {

        this.route.post('/login',
            auth.basicAuth,
            validate.body(
                Joi.object({
                    email: Joi.string()
                    .email()
                    .lowercase()
                    .trim()
                    .required(),
                    password: Joi.string()
                        .min(7)
                        .max(64)
                        .trim()
                        .required()
                        .error(
                            new Error(
                                "Wrong Password Format"
                            )
                        ),
                })
            ),
            onboardingControllers.login 
            
        );
        
        this.route.post('/signup',)



        return this.route;
    }
}

export const onboardingRoutes = new OnboardingRoutes();

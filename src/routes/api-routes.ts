import {Request, Response, Router} from 'express';
import { jwtAuthorisation, sessionManagement, validationMiddleware  } from '../middlewares/validation-middlewares';
import { loginSchema } from '../constants/validation-schema';
import { Login, Logout, Signup } from '../controllers/auth/onboarding';
import { AddAddress, AddProduct } from '../controllers/features/products';


const router: Router = Router();

// Routes can be written in this way too
// router.route('/users').get((req:Request,res:Response)=>{
//     serverLogger.info("I M HERE")
// })

    // Onboarding 
   
    router.post('/login', validationMiddleware(loginSchema) ,Login);

    router.post('/signup',Signup );

    router.get('/logout',jwtAuthorisation, sessionManagement, Logout )


    // User 

    router.post('/address',jwtAuthorisation,sessionManagement,AddAddress)

    



    // Feature

    router.post('/add-product',jwtAuthorisation,sessionManagement,AddProduct)



export const apiRouter = router;
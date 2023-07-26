import {Application, Request, Response, Router} from 'express';
import { serverLogger } from '../utility/serverLogger';
import {validationMiddleware  } from '../middlewares/validation-middlewares';
import { loginSchema } from '../constants/validation-schema';


const router: Router = Router();

// Routes can be written in this way too
// router.route('/users').get((req:Request,res:Response)=>{
//     serverLogger.info("I M HERE")
// })

router.post('/login', validationMiddleware(loginSchema) ,(req:Request, res:Response)=>{

    
    
});

export const apiRouter = router;
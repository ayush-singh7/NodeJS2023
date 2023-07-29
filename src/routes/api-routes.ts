import {Request, Response, Router} from 'express';
import { jwtAuthorisation, sessionManagement, validationMiddleware  } from '../middlewares/validation-middlewares';
import { loginSchema } from '../constants/validation-schema';
import { Login, Logout, Signup } from '../controllers/auth/onboarding';
import { AddProduct, PlaceBid, ViewProduct } from '../controllers/features/products';
import { AddAddress, EditAddress, EditUserDetails, ProductImage } from '../controllers/features/user';
import { Multer } from '../utility/multer';


const router: Router = Router();

// Routes can be written in this way too
// router.route('/users').get((req:Request,res:Response)=>{
//     serverLogger.info("I M HERE")
// })

    // Onboarding 
   
    router.post('/login', validationMiddleware(loginSchema) ,Login); //done

    router.post('/signup',Signup ); //done validation left from here

    router.get('/logout',jwtAuthorisation, sessionManagement, Logout ) //done

    // User 

    router.post('/address',jwtAuthorisation,sessionManagement,AddAddress) //done

    router.patch('/address',jwtAuthorisation,sessionManagement, EditAddress) //done 

    router.patch('/user',jwtAuthorisation,sessionManagement, EditUserDetails ) //done

    // Feature

    router.post('/add-product',jwtAuthorisation,sessionManagement,AddProduct)

    router.get('product-details/:id',jwtAuthorisation,sessionManagement,ViewProduct); //done view the product through ID

    router.post('/product-image/:id',jwtAuthorisation,sessionManagement, Multer.single("image"),ProductImage) //done 

    router.post('/bid',jwtAuthorisation,sessionManagement,PlaceBid) //done

    router.get('/product',jwtAuthorisation,sessionManagement,)



export const apiRouter = router;
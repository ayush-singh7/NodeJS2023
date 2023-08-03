"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
var express_1 = require("express");
var validation_middlewares_1 = require("../middlewares/validation-middlewares");
var validation_schema_1 = require("../constants/validation-schema");
var onboarding_1 = require("../controllers/auth/onboarding");
var products_1 = require("../controllers/features/products");
var user_1 = require("../controllers/features/user");
var multer_1 = require("../utility/multer");
var router = (0, express_1.Router)();
// Routes can be written in this way too
// router.route('/users').get((req:Request,res:Response)=>{
//     serverLogger.info("I M HERE")
// })
// Onboarding 
router.post('/login', (0, validation_middlewares_1.validationMiddleware)(validation_schema_1.loginSchema), onboarding_1.Login); //done (bug when a new user signs up)
router.post('/signup', (0, validation_middlewares_1.validationMiddleware)(validation_schema_1.signupSchema), onboarding_1.Signup); //done 
router.get('/logout', validation_middlewares_1.jwtAuthorisation, validation_middlewares_1.sessionManagement, onboarding_1.Logout); //done
router.post('/profile-picture', multer_1.getBuffer.single('image'), validation_middlewares_1.jwtAuthorisation, validation_middlewares_1.sessionManagement, user_1.ProfilePic); //done
//re claim credentials / Forgot Password
router.post('/generate-otp', onboarding_1.GenerateOTP); //done
router.post('/verify-otp', onboarding_1.VerifyOTP); //done
router.post('/change-password', validation_middlewares_1.jwtAuthorisation, validation_middlewares_1.sessionManagement, onboarding_1.ChangePassword);
// User 
router.post('/address', validation_middlewares_1.jwtAuthorisation, validation_middlewares_1.sessionManagement, user_1.AddAddress); //done
router.patch('/address', validation_middlewares_1.jwtAuthorisation, validation_middlewares_1.sessionManagement, user_1.EditAddress); //done 
router.patch('/user', validation_middlewares_1.jwtAuthorisation, validation_middlewares_1.sessionManagement, user_1.EditUserDetails); //done
// Feature
router.post('/product', validation_middlewares_1.jwtAuthorisation, validation_middlewares_1.sessionManagement, products_1.AddProduct); //done
router.delete('/product', validation_middlewares_1.jwtAuthorisation, validation_middlewares_1.sessionManagement, products_1.RemoveProduct); //done
router.get('/product-details/:id', validation_middlewares_1.jwtAuthorisation, validation_middlewares_1.sessionManagement, products_1.ViewProduct); //done view the product through ID
router.post('/product-image/:id', validation_middlewares_1.jwtAuthorisation, validation_middlewares_1.sessionManagement, multer_1.Multer.single("image"), user_1.ProductImage); //done 
router.post('/bid', validation_middlewares_1.jwtAuthorisation, validation_middlewares_1.sessionManagement, products_1.PlaceBid); //done
router.get('/product-list', validation_middlewares_1.jwtAuthorisation, validation_middlewares_1.sessionManagement, products_1.ProductListing); //done
exports.apiRouter = router;

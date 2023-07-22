import { Application } from "express";
import { Action, CreatePost, HomeScreen, UserPosts } from "../controllers/homescreen";
import { Authorisation, SessionManagement } from "../middlewares/authorisation";
import { Login, Logout, Signup } from "../controllers/onboarding";

export const routes = (app: Application) => {

    /**
 * @openapi
 * /login:
 *  post:
 *     tags:
 *     - LOGIN API
 *     description: Returns TOKEN and stores it in redis server
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - userName:ayushwashere
 *              - password:ayush123
 *            properties:
 *              userName:
 *                type: string
 *                default: ayushwashere
 *              password:
 *                type: string
 *                default: ayush123
     
 *     responses:
 *       200:
 *         description: API is  running
 */

    app.post('/signup',Signup);

    app.post('/login',Login);
    
    app.get('/logout',Authorisation,Logout);

    app.post('/post',Authorisation ,CreatePost)

    app.post('/action',Authorisation,SessionManagement,Action);
    
    app.get('/followers',Authorisation, UserPosts);

    
}



// routes we need 
//  onboarding, add-post, action on post, reply to comment type action,
//  delete post, counter for like/dislike
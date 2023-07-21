import { Application } from "express";
import { Action, CreatePost, HomeScreen, UserPosts } from "../controllers/homescreen";
import { Authorisation } from "../middlewares/authorisation";
import { Login, Signup } from "../controllers/onboarding";

export const routes = (app: Application) => {


    app.post('/signup',Signup);

    app.post('/login',Login);

    app.post('/post',Authorisation ,CreatePost)

    app.post('/action',Authorisation,Action);
    
    app.get('/followers',Authorisation, UserPosts)
    
}



// routes we need 
//  onboarding, add-post, action on post, reply to comment type action,
//  delete post, counter for like/dislike
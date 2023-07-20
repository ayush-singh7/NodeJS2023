import { Application } from "express";
import { Action, HomeScreen, Login, MakePost, Signup, Test } from "../controllers/homescreen";

export const routes = (app: Application) => {

    app.post('/create-user', HomeScreen)

    app.post('/create-post', MakePost)

    app.post('/test', Test)

    app.post('/action',Action);

    app.post('/signup',Signup);

    app.post('/login',Login);


    
}
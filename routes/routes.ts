import { Application } from "express";
import { HomeScreen, MakePost, Test,  Testing } from "../controllers/homescreen";

export const routes = (app: Application) => {

    app.post('/create-user', HomeScreen)

    app.post('/create-post', MakePost)

    app.post('/test', Test)


    // app.post('/test', Testing)



}
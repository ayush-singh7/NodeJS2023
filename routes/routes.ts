import { Application } from "express";
import { Login } from "../controllers/onboarding";
import { verifyToken } from "../middlewares/authorisation";
import { FetchChat } from "../controllers/chat-controllers";

export default function routes(app:Application){


    app.post('/login',Login)

    app.get("/get", verifyToken, FetchChat)

    // app.post("/merge", Merge);

    // app.post("/read", Read);

    // app.delete("/delete/:id",Delete)

}
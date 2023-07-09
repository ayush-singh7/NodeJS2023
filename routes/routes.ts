import { Application } from "express";
import { Delete, Merge, Read, Upload } from "../controllers/upload-controllers";
import { Multer } from "../middlewares/multer";

export default function routes(app:Application){

    app.post("/upload", Multer.single("text-file"), Upload)

    app.post("/merge", Merge);

    app.post("/read", Read);

    app.delete("/delete/:id",Delete)

}
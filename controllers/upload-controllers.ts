import { Request, Response } from "express"
import fs from "fs"

export const Upload = (req:Request,res:Response)=>{
    let fileName = req.file?.filename;

    fs.readFile(`uploads/${fileName}`,'utf-8' ,function(err, data) {

        fs.writeFile(`backup/backup_${fileName}`, data, ()=>{
            res.status(200).send("DATA has been uploaded and backed up in the directory backup/")
        })
                
    });
}

export const Merge = (req:Request, res:Response) =>{
    let {file1,file2}  = req.body;    

    if(!file1 || !file2) res.status(400).send("SEND BOTH FILE NAMES") 
    try{
        let data_1 = fs.readFileSync(`uploads/${file1}`,'utf-8')             
        let data_2 = fs.readFileSync(`uploads/${file2}`,'utf-8')             
        let mergedFileName = `${file1.substring(0,file1.length - 4)}_${file2.substring(0,file1.length - 4)}_${Date.now()}.txt` 

        fs.writeFileSync(`merge/${mergedFileName}`,data_1+data_2);
        res.status(201).send(`${mergedFileName} has been created at merge/${mergedFileName}`)
            
    }catch(e:any){
        
        res.status(404).send("file not found");

    }
     

}

export const Read = (req:Request, res:Response) =>{
    let {file_name} = req.body;
    
    fs.readFile(`uploads/${file_name}`,'utf-8' ,function(err, data) {

        res.status(200).send(data);

    })
}

export const Delete = (req:Request, res:Response) =>{
    const fileName = req.params.id;
    let path = `uploads/${fileName}`

    try {
        fs.unlinkSync(path);
        res.send(200).send("Successfully removed file")
    } catch(err) {        
        res.status(200).send(err);
    }
    
}
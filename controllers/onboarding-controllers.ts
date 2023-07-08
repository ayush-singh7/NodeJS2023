import { Request, Response } from "express"
import fs from "fs"
import { v4 as uuidv4 } from 'uuid';
import { registerSchema, updateSchema } from "../validation-schema/onboarding-schema";

import { I_USER } from "../interfaces/user";

export const RegisterUser = async(req:Request,res:Response) =>{
    try{
        
        const { error } = await registerSchema.validateAsync(req.body);

        req.body.id = uuidv4();
        let userList = getUserList();

        if(!userList){ 
            let userList:Array<I_USER> = [];
            userList.push(req.body);
            fs.writeFileSync('user-list/all-users.json',JSON.stringify(userList))
            res.status(202).send("User registered successfully")

        }else{  
            let userListParsed = JSON.parse(userList);
            userListParsed.push(req.body);
            // writeUserList(userList);
            fs.writeFileSync('user-list/all-users.json',JSON.stringify(userListParsed))   
            res.status(202).send("User registered successfully")
        }
    }catch(e:any){
        const {details} = e;
        res.send(details);
    }
    

}

export const LoginUser = (req:Request, res:Response) =>{
    
    const {email, password} = req.body;
    let userList = getUserList()
    if(!userList){
        res.status(400).send("No users exist!!")
    }else{
        
        let userIndex = JSON.parse(userList).findIndex((user:I_USER)=> (email === user.email && password === user.password) );
        if(userIndex == -1){
            res.status(400).send("This user does not exist !!")
        }else{
            let loggedInUser = JSON.parse(userList)[userIndex]
            res.status(200).send({first_name:loggedInUser.first_name, last_name:loggedInUser.last_name,dob:loggedInUser.dob, gender:loggedInUser.gender})
        
            
        }
    }

}


export const GetUser = (req:Request, res:Response)=>{
    const id = req.params.id;

    let userList = getUserList()
    if(!userList){
        res.status(400).send("No users exist!!")
    }else{
        let userIndex = JSON.parse(userList).findIndex((user:I_USER)=> (id === user.id) );
        if(userIndex == -1){
            res.status(400).send("Wrong credentials !!")
        }else{
            let userDetails = JSON.parse(userList)[userIndex]
            res.status(200).send(userDetails)
        }   
    }
}

export const UpdateUser = async (req:Request, res:Response)=>{
    try{
        const id = req.params.id;
        const {first_name, last_name, dob } = req.body;

        let {error} = await updateSchema.validateAsync(req.body)

        let userList = getUserList()
        if(!userList){            
            res.status(400).send("No user exist!!")
        }else{

            let parsedUserList = JSON.parse(userList);
            parsedUserList.map((user:I_USER)=>{

                if(user.id === id){
                    user.first_name = first_name;
                    user.last_name = last_name;
                    user.dob = dob;
                }
            })
            writeUserList(parsedUserList)
            res.status(201).send("Successfully Updated")
        }
    }catch(e:any){
        const {details} = e;
        res.status(400).send(details);
    }

}


export const DeleteUser = (req:Request, res:Response)=>{
    const id = req.params.id;
    
    let userList = getUserList()
    if(!userList){
        res.status(400).send("No user exist!!")
    }else{
        let userIndex = JSON.parse(userList).findIndex((user:I_USER)=> (id === user.id) );
        if(userIndex == -1){
            res.status(400).send("Wrong credentials !!")
        }else{
            let parsedUserList = JSON.parse(userList)
            parsedUserList = parsedUserList.filter((user:I_USER)=> user.id != id)
            writeUserList(parsedUserList)       
            res.status(200).send("successfully deleted user details")     
        }   
    }
}



const getUserList =()=>{
    let userList = fs.readFileSync('user-list/all-users.json',{ encoding: 'utf8' })    
    return userList;
}

const writeUserList = (userList:Array<I_USER>) =>{
    fs.writeFileSync('user-list/all-users.json',JSON.stringify(userList))
}

import { Request, Response, NextFunction } from "express"
import { generateJWT } from "../../utility/create-token";
import { SessionModel, UserModel } from "../../db/models";

export const Login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        let userData = await UserModel.findOne({
            where: {
                email: email,
                password: password
            },
            attributes: ['user_id']
        })
        let jwtToken = await generateJWT(userData?.dataValues)

        res.status(200).send(jwtToken)
    } catch (e) {
        res.send(e)
    }
}

export const Signup = async (req: Request, res: Response) => {
    try {
        let signedupUser = await UserModel.create(req.body)
        res.status(201).send(signedupUser)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const Logout = async (req: Request, res: Response) => {
    try {
        const { tokenData } = req.body;
        let deleted = await SessionModel.destroy({
            where: { user_id: tokenData.user_id, session_id: tokenData.session_id },
        });

        res.status(200).send("LOGGED OUT")
    } catch (e) {
        res.status(400).send(e)
    }
}
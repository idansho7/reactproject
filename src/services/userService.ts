/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import User from "../interfaces/user";
import { successMsg } from "./feedbacks";


const api: string = process.env.REACT_APP_API + "/users" || "";

export function checkUser(userToCheck: User){
    return axios.get(`${api}?email=${userToCheck.email}&password=${userToCheck.password}`)
}

export async function AddUser(userToAdd: User){
    let email = 0;
    let pass = 0;
    let resPass = await axios.get(`${api}?password=${userToAdd.password}`);
    if(resPass.data.length){
        pass++;
    }

    let resEmail = await axios.get(`${api}?email=${userToAdd.email}`);
    if(resEmail.data.length){
        email++;
    }

    return new Promise((res,rej) => {
        if(email > 0){
            rej("Email")
        }
        if(pass > 0){
            rej("Password")
        }
        if(pass === 0 && email === 0){
            res(axios.post(api,userToAdd).then(()=>{successMsg("User created!")}).catch((err)=>{console.log(err)}));
        }

    })

}


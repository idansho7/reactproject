import axios from "axios";

const api: string = process.env.REACT_APP_API + "/log" || "";

export function checkLog (){
    return axios.get(`${api}/1`);
}

export function setLog (log:boolean, bis: boolean, quan: number){
    return axios.patch(`${api}/1`,{isLog: log, isBis: bis, qua: quan});
}
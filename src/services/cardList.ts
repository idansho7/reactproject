import axios from "axios";
import Card from "../interfaces/card";
import { successMsg } from "./feedbacks";
import { setLog } from "./log";

const api: string = process.env.REACT_APP_API + "/cardLists" || "";
export function addCardList(userId: number){
    return axios.post(api,{userId: userId,cards: [],quantity: 0});
}

export async function getAllCards(){
    let res = await axios.get(api);
    let allCardsArr: Card[] = []
    for (const list of res.data) {
        for (const card of list.cards) {
            allCardsArr.push(card);
        }
    }
    return new Promise((res,rej)=>{
        if(allCardsArr.length){
            res(allCardsArr);
        }else{
            rej("no cards!")
        }

    })
    
}

export async function addCardToList (userId: number,card:Card){
    let res = await axios.get(`${api}?userId=${userId}`);
    let cardArr = res.data[0].cards;
    let qua = res.data[0].quantity;
    qua++;
    localStorage.setItem("quantity",`${qua}`);
    cardArr.push(card);
    return await axios.patch(`${api}/${res.data[0].id}`,{cards: cardArr, quantity: qua});
}
export async function deleteCardById(userId:number, cardDes:string){
    let res = await axios.get(`${api}?userId=${userId}`);
    let cardArr = res.data[0].cards;
    let listId = res.data[0].id;
    let qua = res.data[0].quantity;
    qua = qua-1;
    for (const card of cardArr) {
        if(card.businessDescription == cardDes){
            cardArr.splice(cardArr.indexOf(card),1);
        } 
    }
    return new Promise((res,rej) =>{
        res(axios.patch(`${api}/${listId}`,{cards: cardArr, quantity: qua}).then(() => {successMsg("Card Deleted!"); localStorage.setItem("quantity",`${qua}`); setLog(true,true,qua)}).catch((err) => console.log(err)));
    })
}


export async function getCardByDes(userId: number, cardDes:string){
    let res = await axios.get(`${api}?userId=${userId}`);
    let cardArr = res.data[0].cards;
    let cardToFind: Card;
    
    for (const card of cardArr) {
        if(card.businessDescription == cardDes){
            cardToFind = card;
            
        }
    }
    return new Promise((res,rej) =>{
        if(cardToFind == null){
            return rej("no card found");
        }else{
            return res(cardToFind);
        }
    })
}

export async function updateCardByDes(userId:number, newCard: Card, cardDes:string){
    let res = await axios.get(`${api}?userId=${userId}`);
    let cardArr = res.data[0].cards;
    let listId = res.data[0].id;
    let newArr: Card[] = [];
    for (let card of cardArr) {
        if(card.businessDescription == cardDes){
            newArr.push(newCard);
        }else{
            newArr.push(card);
        }
    }
    return new Promise((res,rej) =>{
        res(axios.patch(`${api}/${listId}`,{cards: newArr}).then(() => {}).catch((err) => console.log(err)));
    })

}


export async function getCardListById (userId:number){
    let res = await axios.get(`${api}?userId=${userId}`);
    return await axios.get(`${api}/${res.data[0].id}`);
}
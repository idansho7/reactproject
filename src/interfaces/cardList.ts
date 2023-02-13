import Card from "./card";

export default interface CardList{
    id?: number,
    quantity?: number,
    userId: number,
    cards: Card[]
}
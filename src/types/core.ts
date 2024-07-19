import { User as NextauthUser } from "next-auth";
export interface Iproduct {
    _id?: string
    imgSrc: string
    fileKey: string
    name: string
    price: {amount: number, currency: string}
    category: string
    quantity: number
    reviews: Review[]
}
   export enum Rating{
    ZERO = 0,
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5
   }
  export interface Review {
    rating: Rating
    comment?: string
    user: IUser|string
  }
 
export interface IUser extends NextauthUser {
  name: string;
  email: string;
  image: string;
  // id: string;
  role: string;
  _id?: string;
}
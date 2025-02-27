import { Category } from "./category"

export type Media = {
    id : string,
    title : string,
    description : string,
    date: Date,
    category: Category
}
import { Author, Tag } from "./";


export interface Blog {
    id?: number;
    title?: string;
    desc?: string;
    image?: string;
    author?: Author;
    tags?: Tag[];
    createdOn?: string;
    updatedOn?: string;
}

import { Collection, Document } from '../Services/Data'

export enum UserType {
    Admin = "Admin",
    Client = "Client"
}

export default class User {
    type: UserType;

    constructor() {
        
    }
}
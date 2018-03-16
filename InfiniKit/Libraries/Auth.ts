import * as firebase from 'firebase';
import { User as Account } from 'firebase/auth';
import { DocumentReference, DocumentSnapshot } from 'firebase/firestore';

import { Collection, Document } from './Data'

export enum UserType {
    Admin = "Admin",
    Client = "Client"
}

export class User {
    type: UserType;

    constructor() {

    }
}

export default abstract class Auth {
    static auth;
    static db;

    static account: Account;
    static user: User;

    static init(): Promise<void> {
        return new Promise<void>(resolve => {
            Auth.auth = firebase.auth();
            Auth.db = firebase.firestore();
    
            Auth.auth.onAuthStateChanged(account => {
                if (account) {
                    Auth.account = account;
                    Auth.db.collection("Users").doc(account.uid).get().then((doc: DocumentSnapshot) => {
                        if (doc.exists)
                            Auth.user = doc.data();
                        resolve();
                    });
                }
                else {
                    Auth.account = Auth.user = undefined;
                    resolve();                    
                }
            });
        });
        
        
    }

    static signUp(email: string, password: string) {
    }

    static signIn(email: string, password: string)  {
        Auth.auth.signInWithEmailAndPassword(email, password)
    }

    static get isSignedIn() : boolean {
        return Auth.account === undefined? false : true;
    }
}
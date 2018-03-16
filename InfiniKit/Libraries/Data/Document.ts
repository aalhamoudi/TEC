import { DocumentReference, DocumentSnapshot, DocumentData } from 'firebase/firestore';
import { observable, computed } from 'mobx';

import { Model } from './Model'

export class Document<T extends Model> {
    private _ref: DocumentReference;
    private _id: string;
    private _data: T;

    constructor(snapshot: DocumentSnapshot) {
        this._ref = snapshot.ref;
        this._id = snapshot.id;
        this._data = snapshot.data();
    }


    get data() {
        return this._data;
    }
}
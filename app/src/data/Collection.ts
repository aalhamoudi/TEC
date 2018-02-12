import * as firebase from 'firebase';
import {
    CollectionReference,
	QuerySnapshot,
	Query,
	DocumentSnapshot
} from 'firebase/firestore';
import { ObservableMap, Atom, extras, transaction, observable, computed, autorun } from 'mobx';
import * as RX from 'rxjs';

import { Document, Model } from './index';

class ObservableCollection<T> extends ObservableMap<T> {
    private _atom: Atom;

    constructor() {
        super();
        this._atom = extras.getAtom(this) as Atom;
        this._atom.observers = observable(this._atom.observers);
    }

    @computed get observers() {
        return this._atom.observers.length;
    }

    @computed get isObserved() : boolean {
        return this.observers > 0? true : false;
    }
}

export class Collection<T extends Model> extends ObservableCollection<Document<T>> {
    private _auto;
    private _ref: CollectionReference;
    private _source: string;
    private _mode: string;
    private _subscription;



    constructor(source: string, mode: string = "auto") {
        super();
        this.source = source;
        this.mode = mode;
    }

    private _update(querySnapshot: QuerySnapshot) {
        transaction(() => {
            querySnapshot.forEach(((document: DocumentSnapshot) => this.set(document.id, new Document<T>(document))));
        });
    }

    private _subscribe() {
        if (this._ref !== undefined)
            this._subscription = this._ref.onSnapshot(this._update.bind(this));
    }

    private _unsubscribe() {
        if (this._subscription !== undefined)     
            this._subscription();
    }

    get ref() : CollectionReference {
        return this._ref;
    }

    get source() : string {
        return this._source;
    }

    set source(collection: string) {
        this._source = collection;
        if (typeof collection === 'string')
            this._ref = firebase.firestore().collection(collection);
    }

    get mode() : string {
        return this._mode;
    }

    set mode(mode: string) {
        this._mode = mode;
        switch(mode) {
            case "on":
                if (this._auto) this._auto();
                this._subscribe();
                break;
            case "off":
                if (this._auto) this._auto();
                this._unsubscribe();
                break;
            case "auto":
                this._auto = autorun(() => this.isObserved? this._subscribe() : this._unsubscribe());
                break;
        }
    }

    map(callback: (value?: Document<T>, index?: number, array?: Document<T>[]) => {}) {
        return this.values().map(callback);
    }

    fetch() {
        this._ref.get().then(this._update);
    }

    add(item: T) {
        this._ref.add(item);
    }

    update(item: T) {

    }
}
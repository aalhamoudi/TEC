import { observable, computed, ObservableMap } from 'mobx'
import { Collection } from '../../Services/Data/Collection';

import Auth from '../../Services/Auth'

import Item from '../../models/Item'

export class AccountStore {
    @observable items: Collection<Item> = new Collection("items");

    constructor() {
    }

}
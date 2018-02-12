import { observable, computed, ObservableMap } from 'mobx'
import { Collection } from '../../data/Collection';

import { Auth } from '../../services/auth'
import { Rest } from '../../services/rest'

import Item from '../../models/Item'

export class DashboardStore {
    @observable items: Collection<Item> = new Collection("items");

    constructor() {
    }

}
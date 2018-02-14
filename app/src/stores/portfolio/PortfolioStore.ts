import { observable, computed} from 'mobx'
import { Collection } from '../../Services/Data/Collection';


import Item from '../../models/Item'

export class PortfolioStore {
    @observable items: Collection<Item> = new Collection("items");

    constructor() {
    }

}
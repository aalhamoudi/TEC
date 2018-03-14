import { observable, computed} from 'mobx'
import { Collection } from '../../Services/Data/Collection';

export enum Language {
    Arabic,
    English
}

export class PortfolioStore {
    @observable language?: Language = Language.Arabic;

}
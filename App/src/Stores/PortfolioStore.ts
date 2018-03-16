import { observable, computed} from 'mobx'

export enum Language {
    Arabic,
    English
}

export class PortfolioStore {
    @observable language?: Language = Language.Arabic;

}
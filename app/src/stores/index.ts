import { PortfolioStore } from './PortfolioStore'

export { PortfolioStore }

export class Stores {
    portfolioStore: PortfolioStore;
}

export default () : Stores => {
    return {
        portfolioStore: new PortfolioStore(),
    }
};
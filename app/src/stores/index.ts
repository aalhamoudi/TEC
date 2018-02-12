import { PortfolioStore } from './Portfolio/PortfolioStore'
import { DashboardStore } from './Dashboard/DashboardStore'

export { PortfolioStore, DashboardStore }

export class Stores {
    portfolioStore: PortfolioStore;
    dashboardStore: DashboardStore
}

export default () : Stores => {
    return {
        portfolioStore: new PortfolioStore(),
        dashboardStore: new DashboardStore()
    }
};
import { PortfolioStore } from './Portfolio/PortfolioStore'
import { DashboardStore } from './Dashboard/DashboardStore'
import { AccountStore } from './Account/AccountStore'

export { PortfolioStore, DashboardStore, AccountStore }

export class Stores {
    portfolioStore: PortfolioStore;
    dashboardStore: DashboardStore;
    accountStore: AccountStore;
}

export default () : Stores => {
    return {
        portfolioStore: new PortfolioStore(),
        dashboardStore: new DashboardStore(),
        accountStore: new AccountStore()
    }
};
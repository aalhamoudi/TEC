
export interface ResponsiveStateProps {
    id: string;
    query: string;
    onStateEnter?: (() => void)[];
    onStateLeave?: (() => void)[];
}

export class ResponsiveState implements ResponsiveStateProps {
    private matcher;

    id: string;
    query: string;
    onStateEnter?: (() => void)[];
    onStateLeave?: (() => void)[];

    constructor(id, query, onStateEnter?, onStateLeave?) {
        this.id = id;
        this.query = query;
        onStateEnter && this.onStateEnter.push(onStateEnter);
        onStateLeave && this.onStateLeave.push(onStateLeave);

        this.matcher = window.matchMedia(this.query);
        this.matcher.addListener(matches => {
            if (matches)
                this.onStateEnter.forEach(listener => listener());
            else
                this.onStateEnter.forEach(listener => listener());
        })
    }

    addStateEnterListener(listener: () => void) {
        this.onStateEnter.push(listener);
    }

    addStateLeaveListener(listener: () => void) {
        this.onStateLeave.push(listener);
    }

    removeStateEnterListener(listener: () => void) {
        this.onStateEnter = this.onStateEnter.filter(l => l !== listener);
    }

    removeStateLeaveListener(listener: () => void) {
        this.onStateLeave = this.onStateLeave.filter(l => l !== listener);
    }
}

export class ResponsiveCategory {
    id: string;
    states: ResponsiveState[];
    state: string;
    onChange: ((state) => void)[];

    constructor(id: string) {
        this.id = id;
    }
    addState(state: ResponsiveStateProps) {
        this.states.push(new ResponsiveState(state.id, state.query, state.onStateEnter, state.onStateLeave))
    }

    removeState(id: string) {
        this.states = this.states.filter(state => state.id !== id);
    }

    getState(id: string): ResponsiveState {
        return this.states.filter(state => state.id === id)[0];
    }
}

export class ResponsiveStateManager {
    static categories: ResponsiveCategory[];
    static state;

    static addCategory(id: string) {
        ResponsiveStateManager.categories.push(new ResponsiveCategory(id))
    }

    static removeCategory(id: string) {
        ResponsiveStateManager.categories = ResponsiveStateManager.categories.filter(categorie => categorie.id !== id);
    }

    static getCategory(id: string): ResponsiveCategory {
        return ResponsiveStateManager.categories.filter(categorie => categorie.id === id)[0];
    }
}

const states = {
    orientation: {
        portrait: "(orientation: portrait)",
        landscape: "(orientation: landscape)",
    },
    device: {

    },
    breakpoint: {

    },
    type: {

    }
}

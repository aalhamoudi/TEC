
export default interface Theme {
    Palette?: any;
    Typography?: any;
    Components?: any;
}

export class DefaultTheme implements Theme {
    Palette: {};
    Typography: {};
    Components: {};
}
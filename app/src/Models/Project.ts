export enum ProjectType {
    Website = "Website",
    WebApp = "WebApp",
    Desktop = "Desktop",
    iOS = "iOS",
    Android = "Android"
}

export default class Project {
    name: string;
    types: ProjectType[]
}
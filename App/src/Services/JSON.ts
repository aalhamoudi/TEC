
export class JSONFile {
    static getData(path): Promise<any> {
        return fetch(path).then(response => response.json());
    }
}
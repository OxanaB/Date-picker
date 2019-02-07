import { DiveRequest } from "./dive-requests";

export function sendNewDiveRequest(request: DiveRequest[]): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const url = 'http://localhost:8080/dive-requests';
        const data = JSON.stringify({ request })

        xhr.onload = function () {
            const json = xhr.responseText;
            const obj = JSON.parse(json);
            resolve(obj);
        };
        xhr.onerror = function (error) {
            console.error(error);
            reject(error);
        };
        xhr.open('POST', url);
        xhr.send(data);
    });
}

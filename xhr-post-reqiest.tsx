import { DiveRequest } from "./dive-requests";

export function sendNewDiveRequest(request: DiveRequest[]): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const url = 'localhost:8080';
        const data = JSON.stringify({ request })

        xhr.responseType = 'json';
        xhr.onload = function () {
            resolve(xhr.responseText);
        };
        xhr.onerror = function (error) {
            reject(error);
        };
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                return xhr.response;
            }
        };
        xhr.open('POST', url);
        xhr.send(data);
    });
}

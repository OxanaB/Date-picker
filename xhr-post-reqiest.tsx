import { DiveRequest } from "./dive-requests";

export function sendNewDiveRequest(requiest: DiveRequest[]): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const url = 'http://localhost8080';
        const data = JSON.stringify({ requiest })

        xhr.responseType = 'json';
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                return xhr.response;
            }
        };
        xhr.open('POST', url);
        xhr.send(data);
    });
}

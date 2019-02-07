import * as express from 'express';
import { DiveRequest } from '../dive-requests';
const app = express();

const diveRequests: DiveRequest[] = [];
let diveRequestsIdCounter = 0;

const createDiveRequest = (where: string, what: string) => {
    let newId: number;
    if (where === 'dive-requests') {
        diveRequestsIdCounter += 1;
        newId = diveRequestsIdCounter;
        if (what.hasOwnProperty('name') &&
            what.hasOwnProperty('email') &&
            what.hasOwnProperty('telephone')) {
            return {
                newDiveRequest: {
                    id: newId,
                    ...diveRequests
                }
            };
        } else {
            return false;
        }
    } else {
        return null;
    }
};

app.post('/dive-requests', (req, res) => {
    console.log('doing post');
    res.status(200).send(`{}`);
    return;
    const receivedDiveRequest = createDiveRequest('dive-requests', req.query);
    if (receivedDiveRequest) {
        diveRequests.push();
        res.status(201).send(receivedDiveRequest);
    } else {
        res.status(404).send(`Error`);
    }
});

const port = 8080;
app.listen(port, () => console.log(`http://localhost:${port}/`));

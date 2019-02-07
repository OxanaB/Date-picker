import * as express from 'express';
const app = express();

let diveRequestsIdCounter = 0;

const createDiveRequest = (where: string, what: any[]) => {
    let newId: number;
    if (where === 'dive-requests') {
        diveRequestsIdCounter += 1;
        newId = diveRequestsIdCounter;
        return {
            newDiveRequest: {
                id: newId,
                name: what[0],
                email: what[1],
                telephone: what[2],
                diveLevel: what[3],
                arrivalDate: what[4],
                hotel: what[5],
                message: what[6]
            }
        };
    } else {
        return false;
    }
};

app.post('/dive-requests', (req, res) => {
    const receivedDiveRequest = createDiveRequest('dive-requests', req.query);
    console.log(receivedDiveRequest);
    res.status(200).send(`{}`);
    return;
    if (receivedDiveRequest) {
        res.status(201).send(receivedDiveRequest);
    } else {
        res.status(404).send(`Error`);
    }
});

const port = 8080;
app.listen(port, () => console.log(`http://localhost:${port}/`));

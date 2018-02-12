import { https, config } from 'firebase-functions';
import * as firebase from 'firebase-admin';
import * as express from 'express';

import { Item } from './models/Item'

const app = express();

firebase.initializeApp(config().firebase);

app.get('*', (req, res) => {
    let db = firebase.firestore();
    db.collection("items").add(new Item("Testing")).then((ref) => res.send(ref.id)).catch((reason) => res.send(reason));
});

export const helloWorld = https.onRequest(app);
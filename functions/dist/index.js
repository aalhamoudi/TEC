"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_functions_1 = require("firebase-functions");
const firebase = require("firebase-admin");
const express = require("express");
const Item_1 = require("./models/Item");
const app = express();
firebase.initializeApp(firebase_functions_1.config().firebase);
app.get('*', (req, res) => {
    let db = firebase.firestore();
    db.collection("items").add(new Item_1.Item("Testing")).then((ref) => res.send(ref.id)).catch((reason) => res.send(reason));
});
exports.helloWorld = firebase_functions_1.https.onRequest(app);
//# sourceMappingURL=index.js.map
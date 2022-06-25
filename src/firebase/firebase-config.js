import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";

const serviceAccount = require('../../firebase-key.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { foxes } from "./data.js";
// import * as serviceAccount from "../../firebase-key.json" assert { type: "json" };

initializeApp({
  credential: cert({
    type: "service_account",
    project_id: "foxes-2ee18",
    private_key_id: "64504eece8e85efbdfb235d96a93a1db43472730",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCk80bpjDjr/W39\nPw3FxkT6k1DjYsQljPqvLzTUZ46rofVNHpdmRfLxY7D369fNY0gubGXGUr09qUjp\nsKvM+sDl/4tyKENhUUW0Q0iQNgc2HtmxNYHDs8azVowoG7r23NqWgQpQQPNQaD5O\nhFEOQ1S9lxczA/Dn+pFFKFkQZwz3og+U0kuqHMOth+o0cKJ29IrlCg9tBvR37i29\nBiStH192hAuYTYyN/pS/wzpvcrivrZWHmswOG17+1itmwiIj57We8y2uTntBTrVY\njRdsBt5Gzha7JmA455u/hs1FzgMUW9dbIzp2uSh2SUpB0Uq43Muvz/vH85+GPh/C\nwXcKNEMtAgMBAAECggEACBE64mDAhvAv4S8kiAv0ozGxxtE1iSWePBOpuIqxDF1h\nLyqkGnUo1tv6k4GGHi4xIU4dYyf4R+v/3CgPGvkXlpgbNJPaCcgtCc4xnhX6X8/9\n8yAMDut7uBkvRSXoDLtL+IjqnXazv7a9d18azMEHw7cARDc44MudL73zryzvEixX\njzSC8uRVHyVigMpI2OcLcLqYlq49pCWnWEG/8b9bfKUY94jHVUioRfpxyPONTp7Y\nc82xpOTvHxEPVmOe0ygAQYESLp3lcmgQt76L9SxkRurx9+b1JpzynFPUy1VGGoqq\nsUzPE8AubYUBn8zWOQD1n/yZLFyEHdVqjc2vPfUz6QKBgQDPsRJSNDSLbGcIivsZ\nLhfKdw8EgNtporYqTZLW9U+CeDdpQknAfD0JGMEuEHVluICK2VdH9cFpSCqSAgKE\ndLQ4u2q+YaOtqnb0FZB2YApqs7YleI3LFNA8NWg40f4R/8bhPP9EkXFJBfQEhQV0\nQDCqV5+GngFV9UC09dpRRrDJyQKBgQDLUS9Hj2ccSDJC1BssbAiDMC3amYTzK7F+\nqQxgWQDdNnr9N2KsDo/h5mgUcjYHxmx4ycRUL8llT3cSstf/s5Fhfkr7Dh+gVtjI\nhmUkNsm3+kQ4CUanGxkh5g2jUJrGJUXaOeUS0spYL0PelQtpYhMrwHC9Ses4gaHq\nkr1Aqw7gRQKBgHqYfkUR1dZa5bLQPwoNADQd9TpmSZ3gUwFDiyLh6M4N4j96xogd\njfW5rAZh5rpln1LWmkO62DEqTR6kmxHOxbcbQhYhEnnnvpGzzPNjG6MCc8lIkQJI\nRebUa7Hmmr/LKH06AUBbTfCZ2AF299I4NcHHOT5ANG+l9k0bNoR1YtOpAoGBAKRj\nnuOwOgFvClxoXRQ8wWE5CkouSIXI9Tlg+6XHMOCrlSO5rWlKWOGgxtSJR9BfigLb\nuIcNIDxu1OrkearAiLKYR43X7JBax+rSZ2KxfcXob1IThfHFAjwbYzmCCbJeHq2E\nlAf1MS+9/5UvU0vAxZlhfoY+BxboEX+1Z5mq9Vs1AoGAPe/nfMLNLaf6v+jzRIT8\nRWLpLLJCTVBEF+AduC0JvWs2KQgUHQI+ORf8WxtlilBSMDPdWXXvExSvmZGjjUjY\n5EyWX1A0kyJwsGwxXVPGEWPxq1hZIrDWiCvonAVkofa2Ph38xpdhYl6/Ea4UTtWH\noPqIDZW0yRMBaZUvDP9yGUI=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-7p9ft@foxes-2ee18.iam.gserviceaccount.com",
    client_id: "116713342357137613094",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7p9ft%40foxes-2ee18.iam.gserviceaccount.com",
  }),
});

const db = getFirestore();

// const firestoreAdd = async (db, fox) => {
//   try {
//     return db.collection("foxes").add(fox);
//   } catch (error) {
//     console.log(error);
//     console.log(`ERROR ADDING ${JSON.parse(fox)}`);
//   }
// };

// firestoreAdd(db, {
//   image:
//     "https://lh3.googleusercontent.com/vJ31pXV6EY_wzBGTfi_VctKjJkdAO7T6NjHqnR4VgAGU1aVva9mpMuHARSK-NOt4-I3ssgasI5nCcvBzbwnm3gzzw7dGBQ6Fvg8Ulw=w=s256",
//   tokenId:
//     "48037275871633193830421594285625459086251650415150495168122987884311637655553",
//   description: "",
//   name: "The leaves had yet to fall.",
//   attributes: [
//     { trait_type: "Philosophy", value: "Transcendentalism" },
//     { trait_type: "Baggage", value: "Just gets sad sometimes" },
//     { trait_type: "Virtues", value: "Wistful" },
//   ],
// });

foxes.forEach(function (obj) {
  db.collection("foxes")
    .add(obj)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});

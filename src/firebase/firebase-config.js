import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9PuTY_CqgsFVtgArrWGB0o_K9nRUxnmM",
  authDomain: "foxes-2ee18.firebaseapp.com",
  projectId: "foxes-2ee18",
  storageBucket: "foxes-2ee18.appspot.com",
  messagingSenderId: "715111903253",
  appId: "1:715111903253:web:aae71f4c7126638a4e9e1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// db.collectionGro

// // Get a list of foxoes from your database
// async function getFoxes(db) {
//   const foxesCol = collection(db, "foxes");
//   const foxesSnapshot = await getDocs(foxesCol);
//   const foxesAttributes = foxesSnapshot.docs.map(
//     (doc) => doc.data().attributes
//   );
//   return foxesAttributes;
// }

// const foxesAttributes = await getFoxes(db);
// const species = foxesAttributes.map((attributeList) =>
//   attributeList.filter((attribute) => attribute.trait_type === "Species")
// );
// const speciesValues = species.map((type) =>
//   type[0] ? type[0].value : undefined
// );
// const speciesSet = new Set(speciesValues);

// console.log(speciesSet);

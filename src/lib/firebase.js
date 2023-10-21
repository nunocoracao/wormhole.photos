import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    orderBy,
    limit
} from "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyAkwNz2JbrZcpI7NjWZW5JkjN6VyHeQs5k",
    authDomain: "wormhole-9c98e.firebaseapp.com",
    projectId: "wormhole-9c98e",
    storageBucket: "wormhole-9c98e.appspot.com",
    messagingSenderId: "86680225679",
    appId: "1:86680225679:web:1890d60ada12b817e62dfa"
};
initializeApp(firebaseConfig);

const db = getFirestore();

export const getFeed = async () => {
    return new Promise(async (resolve, reject) => {
        const q = query(collection(db, "feed"), orderBy("timestamp", "desc"), limit(200));
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) =>
            docs.push({
                id: doc.id,
                ...doc.data(),
            })
        );
        resolve(docs);
    });
};

export const getItem = async (id) => {
    return new Promise(async (resolve, reject) => {
        const docRef = doc(db, "feed", id);
        const docSnap = await getDoc(docRef);
        resolve({
            id: docSnap.id,
            ...docSnap.data(),
        });
    });
};
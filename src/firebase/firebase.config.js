// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWkLYwPNoX66VEkCivUVJkKtLc0y3n4Ew",
    authDomain: "bistro-boss-restaurant-126d8.firebaseapp.com",
    projectId: "bistro-boss-restaurant-126d8",
    storageBucket: "bistro-boss-restaurant-126d8.appspot.com",
    messagingSenderId: "446131219649",
    appId: "1:446131219649:web:62bcf1e6d2e785997ff840",
    measurementId: "G-LMCK5G6453",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;

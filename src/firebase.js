import { initializeApp } from "firebase/app";
import emailjs from '@emailjs/browser';
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAMS14yes4u_K8VsA159SGpeoA0WXzv_hc",
    authDomain: "picme-167e6.firebaseapp.com",
    databaseURL: "https://picme-167e6.firebaseio.com",
    projectId: "picme-167e6",
    storageBucket: "picme-167e6.appspot.com",
    messagingSenderId: "454462386990",
    appId: "1:454462386990:web:eac3863771bb2fed"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


const serviceID = 'service_yvztfr8';
const publicKey = 'user_473cP0iJABpz16Uy0Jjpx';
const uploadDocument = (templateParams, templateID, file, callBack = () => { }) => {
    const storageRef = ref(storage, `uploads/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            console.log('emailjs >>3 >> 7 >> ', percent);
        },
        (err) => {
            console.log('emailjs >>3 >> 7 >> err ', err);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                templateParams.download_link = url;
                console.log("templateParams >> ", {
                    serviceID, templateID, templateParams, publicKey
                })
                emailjs.send(serviceID, templateID, templateParams, publicKey)
                    .then(() => {
                        alert("Form submitted successfully!");
                        callBack(true)
                    }, () => {
                        callBack(false)
                    });
            });
        }
    );
}

export default uploadDocument;

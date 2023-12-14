import db from "../Config/firebase.config";//se importa firestore(configuracion)


import { addDoc, collection, query, getDocs, doc, getDoc } from 'firebase/firestore/lite'; //se importan las funciones


export const createDocument = async (docObj,nameCollection) => {
    try{
        const colRef = collection(db,nameCollection);
        const docRef = await addDoc(colRef,docObj);
        return docRef.id;
    }catch(error){
        console.error(error);
    }
};


export const getDocuments = async (nameCollection) =>{
    try{
        const colRef = collection(db,nameCollection);
        const docRef = await getDocs(query(colRef));
        return getArrayCollection(docRef);
    }catch(error) {
        console.error(error);
    };
};




/*-------------------Funciones de soporte---------------------*/

const getArrayCollection = ( collection) =>{
    return collection.docs.map((doc) =>{
        return {...doc.data(),id: doc.id};
    })
};
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, getDocs, setDoc, updateDoc, collection} from "firebase/firestore"

const db = getFirestore();
const auth = getAuth()

export const signUpMerchantWithEmailAndPassword = (email, password) => {
  const tempEmail = email.split('@')
  const merchantEmail = tempEmail[0] + '-merchant@' + tempEmail[1]
	
	return createUserWithEmailAndPassword(auth, merchantEmail, password).then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    
    setDoc(doc(db, "merchants", user.uid), {})

    return {uid: user.uid}
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message.split('').splice(0, 15).join('');
    
    return {errorCode};
  });
}

export const logInMerchantWithEmailAndPassword = (email, password) => {
  const merchantEmail = email + '-merchant'
  
  return signInWithEmailAndPassword(auth, merchantEmail, password).then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    console.log(errorCode, errorMessage);
    return errorCode;
  });
}

export const signOutUser = () => {
  console.log('signout')

  return signOut(auth).then(() => {
    return true;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    console.log(errorCode, errorMessage);
    return false;
  })
}
export const updateMerchantDetails = (merchantDetails, merchantId) => {
  const merchantRef = doc(db, "merchants", merchantId)
  
  return updateDoc(merchantRef, merchantDetails).then((payload) => {
    console.log(payload)
    return true;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message
    return false;
  })
}

export const getMerchantDetails = (merchantId) => {
  const docRef = doc(db, "merchants", merchantId);
  
  return getDoc(docRef).then(payload => {
    console.log(payload)

    if(!payload._document) {
      return null
    }

    const data = payload._document.data.value.mapValue.fields;

    console.log(data);
    
    return data;
  })
}

export const getAllMerchants = () => {
  const collectionRef = collection(db, "merchants");

  return getDocs(collectionRef).then(payload => {
    return payload
  })
}

export const addMerchantProduct = (product, merchantId) => {
  const merchantRef = doc(db, "merchants", merchantId)
  const { productName } = product

  const products = {products: {productName: product}}
  
  return updateDoc(merchantRef, products).then((payload) => {
    console.log(payload)
    return true;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message
    return false;
  })
}

onAuthStateChanged(auth, (user) => {
  if(user) {
    sessionStorage.setItem("uid", user.uid)
  } else {
    sessionStorage.clear()
  }
})


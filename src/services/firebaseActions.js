import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, getDocs, setDoc, updateDoc, collection} from "firebase/firestore"
import { getFirestore, doc, getDoc, getDocs, setDoc, updateDoc, collection} from "firebase/firestore"

const db = getFirestore();
const auth = getAuth()

export const signUpMerchantWithEmailAndPassword = (email, password) => {
  const tempEmail = email.split('@')
  const merchantEmail = tempEmail[0] + '-merchant@' + tempEmail[1]
  const tempEmail = email.split('@')
  const merchantEmail = tempEmail[0] + '-merchant@' + tempEmail[1]
	
	return createUserWithEmailAndPassword(auth, merchantEmail, password).then((userCredential) => {
	return createUserWithEmailAndPassword(auth, merchantEmail, password).then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    
    setDoc(doc(db, "merchants", user.uid), {
      merchantDetails: {
        name: tempEmail[0],
        number: '',
        email: '',
        tagline: '',
        address: '',
        pageLink: tempEmail[0],
        facebookLink: '',
        tiktokLink: '',
        instagramLink: ''
      }
    })

    return {uid: user.uid}
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message.split('').splice(0, 15).join('');
    const errorMessage = error.message.split('').splice(0, 15).join('');
    
    return {errorCode};
    return {errorCode};
  });
}

export const logInMerchantWithEmailAndPassword = (email, password) => {
  const tempEmail = email.split('@')
  const merchantEmail = tempEmail[0] + '-merchant@' + tempEmail[1]

  console.log(merchantEmail)
  
  return signInWithEmailAndPassword(auth, merchantEmail, password).then((userCredential) => {
  return signInWithEmailAndPassword(auth, merchantEmail, password).then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    
    return {uid: user.uid}
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
    if(!payload._document) {
      return null
    }

    const data = payload._document.data.value.mapValue.fields;

    return data;
  })
}

export const getAllMerchants = () => {
  const collectionRef = collection(db, "merchants");

  return getDocs(collectionRef).then(payload => {
    console.log(payload)
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


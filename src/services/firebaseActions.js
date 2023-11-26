import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, updateDoc} from "firebase/firestore"

const db = getFirestore();
const auth = getAuth()

export const signUpMerchantWithEmailAndPassword = (email, password) => {
	
	return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    console.log(user)
    setDoc(doc(db, "merchants", user.uid), {})
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    return errorCode;
  });
}

export const logInMerchantWithEmailAndPassword = (email, password) => {
  
  return signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
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
    const data = payload._document.data.value.mapValue.fields;

    
    return data;
  })
}

onAuthStateChanged(auth, (user) => {
  if(user) {
    sessionStorage.setItem("uid", user.uid)
  } else {
    sessionStorage.clear()
  }
})


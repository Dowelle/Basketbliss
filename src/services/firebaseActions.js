import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, getDocs, setDoc, updateDoc, collection} from "firebase/firestore"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

const db = getFirestore();
const auth = getAuth()
const storage = getStorage()

export const signUpMerchantWithEmailAndPassword = (email, password) => {
  const tempEmail = email.split('@')
  const merchantEmail = tempEmail[0] + '-merchant@' + tempEmail[1]
	
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
    
    return {errorCode};
  });
}

export const logInMerchantWithEmailAndPassword = (email, password) => {
  const tempEmail = email.split('@')
  const merchantEmail = tempEmail[0] + '-merchant@' + tempEmail[1]

  console.log(merchantEmail)
  
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

export const signUpUserWithEmailAndPassword = (email, password, merchantName) => {
  const tempEmail = email.split('@')
  const merchantEmail = tempEmail[0] + `-${merchantName}@` + tempEmail[1]

  console.log('run');
	
	return createUserWithEmailAndPassword(auth, merchantEmail, password).then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    
    setDoc(doc(db, "users", user.uid), {
      userDetails: {
        name: tempEmail[0],
        number: '',
        email: '',
        address: '',
      }
    })

    return {uid: user.uid}
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message.split('').splice(0, 15).join('');
    
    return {errorCode};
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

  console.log(merchantDetails)
  
  return updateDoc(merchantRef, {merchantDetails: merchantDetails}).then((payload) => {
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
    // console.log(payload.data())
    if(!payload._document) {
      return null
    }

    const data = payload.data()

    return data;
  })
}

export const getAllMerchants = () => {
  const collectionRef = collection(db, "merchants");

  return getDocs(collectionRef).then(payload => {
    return payload
  })
}

const generateRandomFileName = () => {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2);
  return `${timestamp}_${randomString}.png`;
};

export const addMerchantProduct = async (product, pictures, merchantId) => {
  const merchantRef = doc(db, "merchants", merchantId);

  try {
    // Use Promise.all to wait for all asynchronous operations to complete
    const picturePaths = await Promise.all(Array.from(pictures).map(async (picture) => {
      const randomName = generateRandomFileName();

      const storageRef = ref(storage, `/files/${randomName}`);
      const res = await uploadBytesResumable(storageRef, picture);
      return res.ref.fullPath;
    }));

    // Retrieve existing products
    const merchantData = await getMerchantDetails(merchantId)
    const existingProducts = merchantData.products;

    let updatedProducts = []
    
    if(!existingProducts) {
      console.log(`hello`)
      updatedProducts = [{...product, pictures: picturePaths}]
    } else {
      // Add the new product and pictures to the existing products
      updatedProducts = [...existingProducts, { ...product, pictures: picturePaths }];
    }

    // Update the Firestore document with the updated products array
    const updatedData = { products: updatedProducts };
    await updateDoc(merchantRef, updatedData);

    console.log('Product added successfully');
    return true;
  } catch (error) {
    console.error('Error adding product:', error.message);
    return false;
  }
};

export const getImageUrl = async (product) => {
  const downloadPromises = await Promise.all(product.pictures.map(async (picture) => {
    const imageRef = ref(storage, picture);
    const res = await getDownloadURL(imageRef)
    return res
  })
  )
  
  return downloadPromises
}


onAuthStateChanged(auth, (user) => {
  if(user) {
    sessionStorage.setItem("uid", user.uid)
  } else {
    sessionStorage.clear()
  }
})


import {useState, useEffect} from 'react'
import './LandingTwo.css'
import { Link, redirect, useNavigate } from 'react-router-dom';

import { logInMerchantWithEmailAndPassword, signUpMerchantWithEmailAndPassword } from '../services/firebaseActions'

import LandingPic from '../assets/landing-left.svg'
import Plant from '../assets/plant.svg'
import Plant2 from '../assets/plant2.svg'
import LandingMiddle_inner from '../components/LandingMiddle_inner'

function LandingTwo({setMerchantDetails}) {
  const [isOpenSignin, setIsOpenSignin] = useState(true);
  const [isOpenLogin, setIsOpenLogin] = useState(true);
  const [isOpenRegister, setIsOpenRegister] = useState(true);
  
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [registerConfirmationPassword, setRegisterConfirmationPassword] = useState("")
  const [authMessage, setAuthMessage] = useState("")
  const [errorCode, setErrorCode] = useState("")
  
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  
  const navigate = useNavigate()
  
  
  useEffect(() => {
    if(errorCode == 'auth/weak-password') {
      setAuthMessage("Password needs to be atleast 6 characters.")
    } else if(errorCode == 'auth/invalid-email') {
      setAuthMessage("Please use a valid email.")
    } else if(errorCode == 'auth/email-already-in-use') {
      setAuthMessage("Email is already in use.")
    }
  }, [errorCode])

  const handleToggleSignin = () => {
    setIsOpenSignin(!isOpenSignin);
  };

  const handleToggleLogin = () => {
    setIsOpenLogin(!isOpenLogin);
  };

  const handleToggleRegister = () => {
    setIsOpenRegister(!isOpenRegister);
  };

  const handleLoginKeyUp = (e) => {
    if(e.code == "Enter") {
      loginMerchant()
    }
  }
  const handleRegisterKeyUp = (e) => {
    if(e.code == "Enter") {
      signUpMerchant()
    }
  }
  
  const handleRegisterEmailValueChange = (e) => {
    setRegisterEmail(e.target.value)
    setAuthMessage("")
  }
  const handleRegisterPasswordValueChange = (e) => {
    setRegisterPassword(e.target.value)
    setAuthMessage("")
  }
  const handleRegisterConfirmationPasswordValueChange = (e) => {
    setRegisterConfirmationPassword(e.target.value)
    setAuthMessage("")
  }
  const handleLoginEmailValueChange = (e) => {
    setLoginEmail(e.target.value)
    setAuthMessage("")
  }
  const handleLoginPasswordValueChange = (e) => {
    setLoginPassword(e.target.value)
    setAuthMessage("")
  }
  
  const signUpMerchant = () => {
    if(registerConfirmationPassword !== registerPassword) {
      setAuthMessage("Password needs to match")
      
      return;
    }
    
    signUpMerchantWithEmailAndPassword(registerEmail, registerPassword).then((response) => {
      console.log(response);
      if(response.uid) {
        setMerchantDetails.setMerchantPageLink(response.uid)
      }

      if(!response.errorCode) {
        navigate('/' + response.uid);
      }
      
      setErrorCode(errorCode)
    })
  }
  const loginMerchant = () => {
    logInMerchantWithEmailAndPassword(loginEmail, loginPassword).then(errorCode => {
      if(!errorCode) {
        navigate('/Homepage');
      }
      
      setErrorCode(errorCode)
    })
  }
  
  const [isCreate, setIsCreate] =useState(true);
  const handleClickCreate = () => {
    setIsCreate(false);
  };
  const [isExit, setIsExit] =useState(true);
  const handleClickExit = () => {
    setIsCreate(true);
  };
  



  return (
    <div className="LandingTwo">
        <div className="title_container">
            <h1 style={{color:"#333"}}>BASKETBLISS</h1>
            <div className="inputs">
              <input placeholder='Enter your email' type="email" value={loginEmail} onChange={handleLoginEmailValueChange}/>
              <input placeholder='Enter your password' type="password" value={loginPassword} onKeyUp={handleLoginKeyUp} onChange={handleLoginPasswordValueChange}/>
              <button  onClick={loginMerchant}>Submit</button>
            </div>
        </div>
        <div className="LandingMiddle">
          <img src={LandingPic} alt="" />
          <div className="middle">
            <LandingMiddle_inner/>
            <div className = {isCreate ? "create" : "create-account"} >
              {isCreate && <div className="account" onClick={handleClickCreate}>Create account</div>}
              
              {!isCreate && (
                <div className="create-container">
                  <h1>Create Account:</h1>
                  <input type="email" placeholder="Enter your email"
                  value={registerEmail}
                  onChange={handleRegisterEmailValueChange} />
                  {/* <div className="passwords"> */}
                    <input type="password" placeholder="Enter your password" value={registerPassword}
        onChange={handleRegisterPasswordValueChange}/>
                    <input type="password" placeholder="Enter your confirm" value={registerConfirmationPassword} onKeyUp={handleRegisterKeyUp}
        onChange={handleRegisterConfirmationPasswordValueChange}/>
        {authMessage && <p style={{color: 'red'}}>{authMessage}</p>}
                  {/* </div> */}
                  <div className="button-container">
                    <button onClick={signUpMerchant} style={{
                      backgroundColor:"#F48BA9",
                      padding:".5rem 1rem",
                      color:"#fff"
                    }}  >Submit</button>
                    <button style={{
                      padding:".5rem 1rem",
                      borderStyle:"solid",
                      borderColor:"#F48BA9",
                      color:"#F48BA9",
                      borderWidth:"1px",
                      backgroundColor:"#DAF0F7"
                    }} onClick={handleClickExit}>Close</button>
                  </div>
                </div>
              )}
            </div>
          </div>
          

        </div>
        <div>
          
        </div>
        <img className="plant" src={Plant} alt="" />
        <img className="plant2" src={Plant2} alt="" />
    </div>
  )
}

export default LandingTwo;
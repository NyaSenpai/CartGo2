import './App.css';
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './Phone.css'
import { Button, TextField } from '@mui/material';
import { signInWithPhoneNumber } from 'firebase/auth';
import { auth } from './firebase/setup';

function App() {

  const[phone,setPhone] = useState("")
  const[user,setUser] = useState(null)
  const[OTP,setOTP] = useState("")

  const SendOTP = async()=>{
        try{
          const confirmation = signInWithPhoneNumber(auth,phone)
          setUser(confirmation)
        }catch(err){
            console.error(err)
        }
  
  }

  const verifyOTP =async()=>{
    try{
        const data = await user.confirm(OTP)
        console.log()
    }catch(err)
    {
    console.error(err)
    }
  }

  return (
  <div className='phone-signin'>
      <div className='phone-content'>
      <PhoneInput
      country={'us'}
      value={phone}
      onChange={(phone)=>setPhone("+" + phone)}
      />
      <Button onClick={SendOTP} sx={{marginTop:"10px"}} variant='contained'>Send OTP</Button> 
      <br/>
      <TextField onChange={()=> setOTP} sx={{marginTop:"10px",width:"300px"}} variant='outlined' size='small' label="Enter OTP"/>
      <br/>
      <Button onClick={verifyOTP} sx={{marginTop:"10px"}} variant='contained' color='success'>Verify OTP</Button>
    </div>
    

  </div>
  );
}

export default App;

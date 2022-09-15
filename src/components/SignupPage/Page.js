import React from 'react'
import SignupInputs from './SignupInputs'
import SignupBtn from './SignupBtn';

 function Page() {
  return (
 <div className='container d-flex justify-content-around mt-4'>
   <div className='card mt-4 border border-0 h-75'>
     <div className='card-body text-center d-flex flex-column align-items-center'>
       <h1 className='card-title fw-bold text-wrap'>Welcome Younglings!</h1>

       <SignupInputs />

       <SignupBtn />

       <div className='text-left mt-3 bottom-text fw-semibold smallText'style={{marginLeft:'15%'}}>
         <span>Login</span> to an existing account
       </div>
     </div>
   </div>

   <div className='Signupmage mt-4' >
     <img src='/images/yportal.png' alt='SignupImage' />
   </div>
 </div>
 )
}
export default Page;
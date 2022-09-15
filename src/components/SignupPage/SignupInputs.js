import React from "react";

 function SignupInputs() {
	return (
		<div className="w-75 mt-4 d-flex flex-column">
			<div className='input-group mb-3'>
				<input type="email" className='form-control p-2 fw-400 fs-5' placeholder='Email' required />
			</div>

			<div className='input-group mb-3'>
				<input type='password' className='form-control p-2 fw-400 fs-5' placeholder='Name' />
			</div>

			
			<div className='input-group mb-2'>
				<input type='password' className='form-control p-2 fw-400 fs-5' placeholder='Password' />
			</div>

		</div>
	);
}
export default SignupInputs;

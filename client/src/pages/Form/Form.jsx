import React, { useState } from 'react';
import "./Form.css";

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
	return (
		<section>
		<div className="login" >

				 	<div className="form-container">
				 				<div className="top-header">
				 		 <h3>{isLogin ? "Login Now" : "SignUp Here"}</h3>
				 		 <small>{isLogin ? "Welcome Back" : "Join Us"}</small>
				 	</div> 
				 	<form action="">
				 	<div className="user-info">
				 	 {isRegister && (
               <>
               	<div className="input-box">
				 		<label htmlFor="name">Name</label>
				 			<input type="text" required name="name" placeholder="Enter Name"/>
				 		</div>
				 			<div className="input-box">
				 		<label htmlFor="email">Email</label>
				 			<input type="email" required name="email" placeholder="Enter Email"/>
				 		</div>
				 			<div className="input-box">
				 		<label htmlFor="password">Password</label>
				 			<input type="password" required name="password" placeholder="Enter Password"/>
				 		</div>
               </>
           	)}
				 	    {isLogin && (
                  <>
				 			<div className="input-box">
				 			<label htmlFor="Email">Email</label>
					 			<input type="email" required name="email" placeholder="Enter email address" />
					 			
				 		</div>
				 		<div className="input-box">
				 		<label htmlFor="Password">Password</label>
					 			<input type="password" required name="password" placeholder="Enter Password "/>
					 			
				 		</div>
				 		
				 		</>
				 	    	)} 
				 		<div className=" submit-btn">
				 			<button>{isLogin ? "Login" : "Register"}</button>
				 		</div>
				 		<p onClick={() => {
				 			setPageType(isLogin ? "register" : "login")
				 		}}>
			     	{isLogin ? "Don't have an account? Sign Up here."
                : "Already have an account? Login here."}
			     </p>
				 	</div>
			</form>
			     
			      
				 	</div>

		</div>
			
		</section>
	)
}

export default Form
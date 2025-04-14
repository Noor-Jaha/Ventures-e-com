import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();

  const [userSignup, setUserSignup] = useState({
    email: '',
    password: ''
  });
  console.log(userSignup)

  const [data,setData] = useState([]);


  const handleChange = (e) => {

    const { value, name } = e.target;

    // console.log(value, name)

    setUserSignup(() => {
      return {
        ...userSignup,
        [name]: value,

      }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const getUserArr = localStorage.getItem("user");

    const { email, password } = userSignup;

    if ( !email || !password) {
      alert('fill all field')
    } else {
      if(getUserArr && getUserArr.length){
        const userdata = JSON.parse(getUserArr);
        const userlogin = userdata.filter((el,k) => {
          return el.email === email && el.password === password
             
        });
        if (userlogin.length === 0){
          alert("you haven't sign up")
        }else{
          console.log("user login successfulyy done");
          localStorage.setItem("user_login",JSON.stringify(getUserArr))
          history("/")
        }
      }    
    }
  }

  return (


    <form >


      {/* <!-- Email input --> */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="email"
          autoComplete='off'
          name='email'
          value={userSignup.email}
          className="form-control"
          onChange={handleChange}

        />
        <label className="form-label" >Email address</label>
      </div>

      {/* <!-- Password input --> */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="password"
          autoComplete='off'
          name='password'
          value={userSignup.password}
          className="form-control"
          onChange={handleChange}
        />
        <label className="form-label" >Password</label>
      </div>

      {/* <!-- 2 column grid layout for inline styling --> */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          {/* <!-- Checkbox --> */}
          <div className="form-check">
            <input className="form-check-input"
              type="checkbox" value="" id="form2Example31" checked />
            <label className="form-check-label" > Remember me </label>
          </div>
        </div>

        <div className="col">
          {/* <!-- Simple link --> */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      {/* <!-- Submit button --> */}
      <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4" onClick={handleSubmit} >Login </button>

      <div>
      <p>Don't have an account?<a href="signup">Sign up</a></p>
     </div>
    </form>

    
  )
}

export default Login
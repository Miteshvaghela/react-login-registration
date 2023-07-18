import React from 'react'
import Header  from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <>
    <Header />
    
    <div className="row col-6 offset-3 my-5">
      <form >
      <div className="form-group">
      <label>Name</label>
      <input className="form-control" name="name" id="name" type="text" />
      </div> 
      <div className="form-group">
      <label>Password</label>
      <input className="form-control" name="password" type="password" id="password" />
      </div>
      <div>
        <input type="submit" value="Login" id="login" className="btn btn-primary mt-4" />
      </div>
      </form>
    </div>
    <Footer />
    </>
  )
}

export default Login
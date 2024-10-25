import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Home=()=>{

  const [email, setEmail]= useState("");
  const [password, setPassword]=useState("");
  const navigate= useNavigate();

  useEffect(()=>{
    let status= localStorage.getItem("userValid")

    if (status)
    {
      navigate("/dashboard");
    }

  }, [])




  const handleSubmit=(e)=>{
    e.preventDefault();
   let api="http://localhost:8000/user/userlogin";
   axios.post(api, {email:email, password:password}).then((res)=>{ 
       console.log(res.data);

       localStorage.setItem("auth-token", res.data.token )
       localStorage.setItem("username", res.data.user.username);

       navigate("/dashboard");

   })
  }

    return(
        <>
           <div id="loginpage">
            <h3> User Login</h3>              
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
            


           </div>
        </>
    )
}

export default Home;
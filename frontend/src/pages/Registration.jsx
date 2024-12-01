import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import {message} from 'antd';
import { useNavigate } from 'react-router-dom';

const Registration=()=>{
  const [input, setInput] = useState({});
  const navigate= useNavigate();

  const handleInput=(e)=>{
    let name= e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    let api="http://localhost:8000/user/registration";
    axios.post(api, input).then((res)=>{
      console.log(res);
      message.success("You are succesfully registered!");
      navigate("/login");
    })
  }

    return(
        <>
           <div id="loginpage">  
            <h3> User Registration</h3>          
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter  Name</Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Email</Form.Label>
        <Form.Control type="email" name="email" value={input.email} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={input.password} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
            


           </div>
        </>
    )
}

export default Registration;
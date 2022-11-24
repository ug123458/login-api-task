import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { register } from "./../action/userActions"
import { Link, useNavigate } from "react-router-dom"
import { Row, Col, Button, Form } from "react-bootstrap"
import FormContainer from "../components/FormContainer"

const RegisterScreen = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmpassword, setconfirmpassword] = useState("")

  const dispatch = useDispatch()
  const history = useNavigate()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = "home"

  useEffect(() => {
    if (userInfo) {
      history(`/${redirect}`)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmpassword) {
    } else dispatch(register(name, email, password))
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => {
              setname(e.target.value)
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => {
              setemail(e.target.value)
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => {
              setpassword(e.target.value)
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm Password'
            value={confirmpassword}
            onChange={(e) => {
              setconfirmpassword(e.target.value)
            }}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Have an Account?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen

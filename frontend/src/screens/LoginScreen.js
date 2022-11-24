import React, { useEffect, useState } from "react"
import { login } from "../action/userActions"
import { Link } from "react-router-dom"
import { Row, Col, Button, Form } from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const LoginScreen = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const dispatch = useDispatch()
  const history = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = "home"

  useEffect(() => {
    if (userInfo) {
      history(`/${redirect}`)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
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
        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          New Customer? <Link to={"/register"}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen

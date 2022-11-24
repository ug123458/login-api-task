import React from "react"
import LoginScreen from "./screens/LoginScreen"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import RegisterScreen from "./screens/RegisterScreen"
import Head from "./components/Head"

const App = () => {
  return (
    <Router>
      <main>
        <Head />
        <Container className='py-3'>
          <Routes>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  )
}

export default App

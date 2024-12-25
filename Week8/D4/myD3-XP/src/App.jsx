import { useState } from 'react'
import { Routes, Route, NavLink } from "react-router";
import './App.css'
import Home from './components/Home';
import Profile from './components/Profile';
import Shop from './components/Shop';
import ErrorBoundary from './components/ErrorBoundary';
import PostList from './components/PostList';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

function App() {

  const ex4 = async () => {
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    }
    try {
      const response = await fetch ('https://webhook.site/25dabc53-86a3-4ad2-9270-7b6d39c9f21e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',       
        },
        body: JSON.stringify(data)  
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
 

  return (
    <>
      {/* EX1 */}
      {/* <nav>
        <NavLink to={'/'}>Home </NavLink>
        <NavLink to={'/profile'}>Profile </NavLink>
        <NavLink to={'/shop'}>Shop </NavLink>
      </nav>
      <Routes>
        <Route
          path='/'
          element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          }
        />
        <Route
          path='/profile'
          element={
            <ErrorBoundary>
              <Profile />
            </ErrorBoundary>
          }
        />
        <Route
          path='/shop'
          element={
            <ErrorBoundary>
              <Shop />
            </ErrorBoundary>
          }
        />
      </Routes> */}

      {/* EX2 */}

      {/* <PostList /> */}

      {/* EX3 */}
      {/* <Example1 />
      <Example2 />
      <Example3 /> */}

      {/* EX4  */}
      <button onClick={()=> ex4()} >Press to post data</button>

      
    </>
  )
}

export default App

import React from 'react'
import './App.css'
import Button from '@mui/material/Button';
function App() {
  function showAlert() {
    window.alert('Hi')
  }
  return (
    <>
      <Button variant="contained" style={{ margin: 5 }} onClick={() => showAlert()}>Alert Now</Button>
    </>
  )
}

export default App
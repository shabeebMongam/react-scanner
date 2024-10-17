import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

  const navigate = useNavigate()
  const handleStartScan = () => {
      navigate('/scan')
  }
  return (
    <div>
      <h1>Welcome</h1>
      <p onClick={handleStartScan}>Click on the Scan button to start scanning.</p>
    </div>
  )
}

export default Welcome
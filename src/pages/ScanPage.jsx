import React from 'react'
import MyQrScanner from '../components/general/qrScanner/MyQrScanner'

const ScanPage = () => {
  return (
    <div className='border-black border-4 h-full w-full flex justify-center pt-20'>
      <div className='rounded-3xl'> 
        <MyQrScanner/>
      </div>
    </div>
  )
}

export default ScanPage
import React from 'react'
import MyQrScanner from '../components/general/qrScanner/MyQrScanner'

const ScanPage = () => {
  return (
    <div className='border-black border-4 h-full w-full flex justify-center items-center'>
        <MyQrScanner/>
    </div>
  )
}

export default ScanPage
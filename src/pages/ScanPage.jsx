import React from 'react'
import MyQrScanner from '../components/general/qrScanner/MyQrScanner'

const ScanPage = () => {
  return (
    <div className=' h-full w-full flex justify-center pt-20 '>
        <MyQrScanner/>
    </div>
  )
}

export default ScanPage
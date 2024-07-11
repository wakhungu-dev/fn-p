import Loader from '@/components/admin-panel/Loader'
import React from 'react'

const loading = () => {
  return (
    <div className={`w-full h-screen flex items-center justify-center bg-transparent`}>
        <Loader />
    </div>
  )
}

export default loading
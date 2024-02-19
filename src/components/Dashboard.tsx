import React from 'react'
import UploadButton from './UploadButton'

const Dashboard = () => {
  return (
    <main className='mx-auto max-w-7xl'>
        <div className='mt-8 flex flex-col items-start justify-between gap-1'>
            <h1 className='mb-3 font-bold text-5xl text-gray-500'>
                My Files
            </h1>
            <UploadButton/>
        </div>

    </main>
  )
}

export default Dashboard

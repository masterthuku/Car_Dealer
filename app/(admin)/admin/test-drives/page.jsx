import React from 'react'
import TestDriveList from './_components/TestDriveList'

export const metadata = {
    title: "Test Drives | VehiQL Admin Dashboard",
    description: "Manage test drives in your marketplace",
}

const TestDrivePage = () => {
  return (
    <div className='p-6'>
        <h1 className='text-2xl font-bold mb-6'>
            Test Drive Management
        </h1>
        <TestDriveList/>
    </div>
  )
}

export default TestDrivePage
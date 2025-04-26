import { getCarById } from '@/actions/carListing';
import { notFound } from 'next/navigation';
import React from 'react'
import { TestDriveForm } from './_components/TestDriveForm';


export async function generateMetadata() {
    return {
        title: "Book a Test Drive | VehiQL",
        description: "Book a test drive for your dream car",
    }
}

const TestDrivePage = async ({params}) => {
  const {id} = await params;
  const result = await getCarById(id);

  if (!result.success) {
    notFound();
  }
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-6xl mb-6 gradient-title'>
        Book a Test Drive
      </h1>
      <TestDriveForm car={result.data} testDriveInfo={result.data.testDriveInfo}/>
    </div>
  )
}

export default TestDrivePage
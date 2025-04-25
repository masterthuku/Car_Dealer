import { getSavedCars } from '@/actions/carListing';
import { auth } from '@clerk/nextjs/server';
import React from 'react'
import SavedCarsList from './_components/SavedCarsList';

const SavedCarsPage = async () => {

    const {userId} = await auth();
    if (!userId) {
        redirect("/sign-in?redirect=/saved-cars");
    }

    const savedCarResult = await getSavedCars();

  return (
    <div className='container mx-auto px-4 py-12'>
        <h1 className='text-6xl mb-6 gradient-title'>
            Your Saved Cars
        </h1>
        <SavedCarsList initialData={savedCarResult} />
    </div>
  )
}

export default SavedCarsPage
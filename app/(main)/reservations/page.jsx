import { getUserTestDrives } from '@/actions/testDrive';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'
import ReservationList from './_components/ReservationList';

export const metadata = {
    title:"Reservations | VehiQL",
    description:"View and manage your reservations"
}

const ReservationsPage = async () => {

    const {userId} = await auth();
    if (!userId) {
        redirect("/sign-in?redirect=/reservations");
    }

    const reservationResult = await getUserTestDrives()

  return (
    <div className='container mx-auto px-4 py-12'>
        <h1 className='text-6xl mb-6 gradient-title'>
            Your Reservations
        </h1>
        <ReservationList initialData={reservationResult}/>
    </div>
  )
}

export default ReservationsPage
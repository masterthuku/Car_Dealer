import { getCarById } from '@/actions/carListing';
import { notFound } from 'next/navigation';
import React from 'react'
import CarDetails from './_components/CarDetails';

export async function generateMetadata({params}) {
  const {id} = await params;
  const result = await getCarById(id);

  if (!result.success) {
    return {
      title: "Car not found | VehiQL",
      description: "The car you are looking for was not found",
    }
  }

  const car = result.data;

  return {
    title: `${car.year} ${car.make} ${car.model} | VehiQL`,
    description: car.description.substring(0, 500),
    openGraph: {
      images: car.images?.[0] ? [car.images[0]] : [],
    }
  }
}

const CarPage = async ({params}) => {

  const {id} = await params;
  const result = await getCarById(id);

  if (!result.success) {
    notFound();
  }

  return (
    <div className='container mx-auto px-4 py-12'>
      <CarDetails car={result.data} testDriveInfo={result.data.testDriveInfo} />
    </div>
  )
}

export default CarPage
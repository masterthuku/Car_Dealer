import { getCarFilters } from "@/actions/carListing";
import React from "react";
import CarFilters from "./_components/CarFilters";
import CarListing from "./_components/CarListing";

export const metadata = {
  title: "Cars | VehiQl",
  description: "Browse and search for your dream car",
};

const CarsPage = async () => {
  const filtersData = await getCarFilters();

  return (
    <div className="container mx-auto px-4 py-12">
        <h1 className="text-6xl mb-4 gradient-title">
            Browse Cars
        </h1>
        <div className="flex flex-col lg:flex-row gap-8">
            {/* filters */}
            <div className="w-full lg:w-80 flex-shrink-0">
                <CarFilters filters={filtersData.data} />
            </div>

            {/* listings */}
            <div className="flex-1">
                <CarListing/>
            </div>
        </div>
    </div>
  )
};

export default CarsPage;

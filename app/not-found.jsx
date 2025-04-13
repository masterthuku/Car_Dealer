import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
        Oops! Page not found.
      </h2>
      <p className="text-gray-600 mt-2 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href={"/"}>
        <Button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200">
          Go to Homepage
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;

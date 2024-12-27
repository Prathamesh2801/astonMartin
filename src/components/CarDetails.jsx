import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cardData } from '../assets/data/card';

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const car = cardData.find(car => car.id === parseInt(id));

  if (!car) {
    return (
      <div className="min-h-screen bg-slate-700 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl mb-4">Car not found</h1>
          <button 
            onClick={() => navigate(-1)} 
            className="bg-emerald-500 px-4 py-2 rounded-lg hover:bg-emerald-600"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-700 py-14 lg:py-20 pb-20">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-white hover:text-emerald-400 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Cars
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <div className="bg-slate-800 rounded-lg overflow-hidden h-[300px] md:h-[400px] lg:h-[600px]">
              <img 
                src={car.Img}
                alt={car.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-800 rounded-lg p-6 lg:p-8 sticky top-4">
              <div className="flex justify-between items-start mb-6">
                <h1 className="text-3xl font-bold text-white">{car.title}</h1>
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
                  {car.label}
                </span>
              </div>

              <p className="text-gray-300 mb-8">{car.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {car.specs && Object.entries(car.specs).map(([key, value]) => (
                  <div key={key} className="bg-slate-700 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm capitalize">{key}</p>
                    <p className="text-white font-semibold">{value}</p>
                  </div>
                ))}
              </div>

              {car.colors && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">Available Colors</h2>
                  <div className="flex flex-wrap gap-3">
                    {car.colors.map((color, index) => (
                      <div 
                        key={index}
                        className="bg-slate-700 px-3 py-1 rounded-full text-gray-300 text-sm"
                      >
                        {color}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto">
                <div className="text-2xl font-bold text-emerald-500 mb-4">
                  {car.price}
                </div>
                <button 
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Contact Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
import React from 'react'
import { Link } from 'react-router-dom';

export default function CardItems({ 
  id, 
  title, 
  description, 
  Img,
  label,
  specs,
  price
}) {
  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-60 overflow-hidden group">
        <img 
          src={Img}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
          {label}
        </span>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        
        {specs && (
          <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
            <div className="text-gray-600">
              <span className="font-semibold">Engine:</span> {specs.engine}
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">Power:</span> {specs.power}
            </div>
          </div>
        )}

        <div className="mt-auto">
          <div className="text-lg font-bold text-emerald-600 mb-3">
            {price}
          </div>
          <Link 
            to={`/car/${id}`}
            className="inline-block w-full bg-emerald-500 text-white text-center py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
}

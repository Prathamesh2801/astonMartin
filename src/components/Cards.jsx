import React from "react";
import CardItems from "./CardItems";
import { cardData } from "../assets/data/card";

function Cards() {
  return (
    <div className="py-16 px-4 bg-gray-700">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Explore Our Aston Martin Models
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our range of exceptional vehicles, each embodying power, 
          luxury, and the unmistakable Aston Martin heritage.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((car) => (
            <CardItems 
              key={car.id}
              id={car.id}
              title={car.title}
              description={car.description}
              Img={car.Img}
              label={car.label}
              specs={car.specs}
              price={car.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;

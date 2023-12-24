import React, { useState, useEffect } from 'react';

const SlidingCard = () => {
  const cardData = [
    { id: 1, text: 'Ombrulla demonstrates how AI could quickly extract value from our data and show significant economic benefits. Ombrulla comes highly recommended by us and we look forward to collaborating with them on future initiatives.', color: 'bg-gray-300' },
    { id: 2, text: 'Ombrulla demonstrates how AI could quickly extract value from our data and show significant economic benefits. Ombrulla comes highly recommended by us and we look forward to collaborating with them on future initiatives.', color: 'bg-gray-300',},
    { id: 3, text: 'Ombrulla demonstrates how AI could quickly extract value from our data and show significant economic benefits. Ombrulla comes highly recommended by us and we look forward to collaborating with them on future initiatives.', color: 'bg-gray-300', },
    { id: 4, text: 'Ombrulla demonstrates how AI could quickly extract value from our data and show significant economic benefits. Ombrulla comes highly recommended by us and we look forward to collaborating with them on future initiatives.', color: 'bg-gray-300', },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const autoSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 3000); // Adjust the interval as needed (in milliseconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-800 p-8">
      <div className=" relative overflow-hidden">
        <div
          className="space-x-4 flex transition-transform duration-500 ease-in-out rounded-3xl"
          style={{
            width: `${cardData.length * 50}%`, 
            transform: `translateX(-${(currentIndex / cardData.length) * 100}%)`,
          }}
        >
          {cardData.map((card) => (
            <div key={card.id} className={`w-1/2 h-auto rounded-3xl ${card.color} p-4`}>
              <p className= "text-black  p-12 m-9">{card.text}</p>
            </div>
          ))}
        </div>
        <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black p-2 text-white" onClick={goToPrevCard}>
          Prev
        </button>
        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black p-2 text-white" onClick={goToNextCard}>
          Next
        </button>
      </div>
      {/* <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black p-2 text-white" onClick={goToPrevCard}>
          Prev
        </button>
        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black p-2 text-white" onClick={goToNextCard}>
          Next
        </button> */}
    </div>
  );
};

export default SlidingCard;

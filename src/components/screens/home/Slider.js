import React, { useState, useEffect } from 'react';

const MyCollection = [
  {
    imgPath: 'https://www.ombrulla.com/wild-leaf.webp',
  },
  {
    imgPath: 'https://www.ombrulla.com/best-western.webp',
  },
  {
    imgPath: 'https://www.ombrulla.com/dubai-festival-city.webp',
  },
  {
    imgPath: 'https://www.ombrulla.com/emirates.webp',
  },
  {
    imgPath: 'https://www.ombrulla.com/burger-king.webp',
  },
  {
    imgPath: 'https://www.ombrulla.com/damac.webp',
  },
  {
    imgPath: 'https://www.ombrulla.com/planet-fitness.webp',
  },
  {
    imgPath: 'https://www.ombrulla.com/suja.webp',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = MyCollection.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalImages]);

  const goToPrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const getTransitionDuration = (direction) => {
    const baseDuration = direction === 'forward' ? 2000 : 500; // Adjust these values
    return currentIndex === 0 ? baseDuration : 300;
  };

  return (
    <div className="p-4">
      <h2 className="text-center" style={{ fontSize: '3rem', lineHeight: '3rem', }}>They trust us</h2>
      <div className="flex">
        <div
          className="place-items-center flex items-center transition-transform ease-in-out"
          style={{
            overflow:'hidden',
            width: `100%`,
            transitionDuration: `${getTransitionDuration('forward')}ms`,
            transform: `translateX(-${(currentIndex / totalImages) * 100}%)`,
          }}
        >
          {MyCollection.map((item, i) => (
            <div key={i} className="flex-shrink-0">
              <img
                src={item.imgPath}
                className="w-40 h-30 object-cover p-5 mr-10 ml-10"
                alt={item.label}
              />
              <div className="">
                <p className="text-sm">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button onClick={goToPrevImage}></button>
        <button onClick={goToNextImage}></button>
      </div>
    </div>
  );
};

export default Slider;

import React, { useState, useEffect } from "react";

const Carousel = ({ words, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, interval);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? words.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === words.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='carousel'>
      <p className='wrds'>{words[currentIndex]}</p>
    </div>
  );
};

export default Carousel;

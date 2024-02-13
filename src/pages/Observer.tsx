import React, { useEffect, useState } from 'react';

const ScrollHandler: React.FC = () => {
  const [placeholders, setPlaceholders] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Add initial set of 10 div elements
    const initialPlaceholders = Array.from({ length: 10 }, (_, index) => (
      <div
        key={index}
        style={{
          backgroundColor: '#000000',
          height: '500px',
          marginLeft: '5px',
          marginRight: '5px',
          marginTop: '25px',
          marginBottom: '5px',
        }}
      />
    ));
    setPlaceholders(initialPlaceholders);

    // Scroll event handler
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop + windowHeight >= documentHeight - 20) {
        // Perform actions when scrolling near the bottom of the page
        const newPlaceholder = (
          <div
            key={placeholders.length}
            style={{
              backgroundColor: '#000000',
              height: '500px',
              marginLeft: '5px',
              marginRight: '5px',
              marginTop: '25px',
              marginBottom: '5px',
            }}
          />
        );
        setPlaceholders((prevPlaceholders) => [...prevPlaceholders, newPlaceholder]);
      }
    };

    // Touch event handlers
    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        const touchStartY = event.touches[0].clientY;
        const handleTouchMove = (event: TouchEvent) => {
          const touchCurrentY = event.touches[0].clientY;
          const touchDeltaY = touchCurrentY - touchStartY;
          if (touchDeltaY > 0) {
            // Perform actions when dragging down near the bottom of the screen
            const newPlaceholder = (
              <div
                key={placeholders.length}
                style={{
                  backgroundColor: '#000000',
                  height: '500px',
                  marginLeft: '5px',
                  marginRight: '5px',
                  marginTop: '25px',
                  marginBottom: '5px',
                }}
              />
            );
            setPlaceholders((prevPlaceholders) => [...prevPlaceholders, newPlaceholder]);
          }
        };
        const handleTouchEnd = () => {
          document.removeEventListener('touchmove', handleTouchMove);
          document.removeEventListener('touchend', handleTouchEnd);
        };
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('touchstart', handleTouchStart);

    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []); // Empty dependency array to run the effect only once

  return <div>{placeholders}</div>;
};

export default ScrollHandler;
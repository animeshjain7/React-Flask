import React, { useState, useEffect } from 'react';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY }); 
  };

  useEffect(() => { 

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="follower"
      // style={{ left: position.x -5, top: position.y -5 }}
      style={{ transform: `translate(${position.x - 5}px, ${position.y - 5}px)`}}
    ></div>
  );
};

export default MouseFollower;

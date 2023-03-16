import React, { useState, useEffect } from 'react';

function ClickMe({isShowen}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const style = {
    position: 'fixed',
    top: position.y + 10,
    left: position.x + 10,
    border: '#00d646 1px solid',
    color: '#00d646',
    borderRadius: '10px',
  };

  return (
    isShowen && <div style={style}>
      <span>Click Me</span>
    </div>
  );
}

export default ClickMe;
import React from 'react';

const Button = ({ btn, backgroundColor, color, Link }) => {
  return (
    <a
      href={Link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <button style={{ backgroundColor, color }}>
        {btn}
      </button>
    </a>
  );
};

export default Button;

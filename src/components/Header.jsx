import React from 'react';

const Header = ({ h1, description }) => {
  return (
    <div className="row">
      <div className="col">
        <h1>{h1}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Header;

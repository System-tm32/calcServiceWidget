import React from 'react';

const ServiceBlock = ({ title, description }) => {
  return (
    <div className="row">
      <div className="col">
        <div className="item">
          <h2 className="title">{title}</h2>
          <div className="description">{description}</div>
          <div className="button">
            <span>Перейти</span>
            <span className="material-icons md-35 icon">arrow_right_alt</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlock;

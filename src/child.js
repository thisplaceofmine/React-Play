import React from 'react';

const Child = ({ i, item }) => {
  return <button className="btn btn-primary mb-2">{`${i} - ${item}`}</button>;
};

export default Child;

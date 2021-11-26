import React from 'react';

function Card(props) {
  return (
    <div className="Card-wrapper text-center bg-black text-light rounded-top">
      <img alt={`${props.name} miniature`} src={props.image} className="Card-image w-100 rounded-top border-bottom"></img>
      <div className="Card-name py-2 text-uppercase font-weight-bold">{props.name}</div>
    </div>

  );
}

export default Card;
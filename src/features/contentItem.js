import React from 'react';
import { Link } from 'react-router-dom';

export default function ContentItem({ image, name, list, link }) {

  return (
    <>
      <div className="card col-lg-3" style={{margin: "10px"}}>
        <div className="Image">
          <img src={image} className="card-img-top img-responsive img-thumbnail" alt={name} />
        </div>
        <div className="card-body">
          <div>
            <h2 className="card-title">{name}</h2>
          </div>
          <hr/>
          <div>
            <p>Services:</p>
            <ul>
            {list.map((op) => <li key={op}>{op}</li>)}
            </ul>
          </div>
        </div>
        <div>
          <Link className="btn btn-primary" to={link}>View more</Link>
        </div>
      </div>
    </>
  )
}
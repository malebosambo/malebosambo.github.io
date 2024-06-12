import React from 'react';
import { Link } from 'react-router-dom';

export default function ContentItem({ image, name, list, link }) {

  return (
    <div classNAme="col-lg-5 col-md-6">
      <div className="card" style={{margin: "10px", padding: "10px"}}>
        <div className="Image">
          <img src={image} className="card-img-top img-responsive img-thumbnail" alt={name} />
        </div>
        <div className="card-body" style={{margin: "15px"}}>
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
        <div style={{marginLeft: "30px"}}>
          <Link className="btn btn-primary" to={link}>View more</Link>
        </div>
      </div>
    </div>
  )
}
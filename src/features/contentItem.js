import React from 'react';

export default function ContentItem({ image, name, list, link }) {

  return (
    <div className="col-lg-5 col-md-6">
      <div className="card" style={{margin: "10px", paddingBottom: "10px"}}>
        <div className="Image">
          <img src={image} className="card-img-top img-responsive" alt={name} height="10px" />
        </div>
        <div className="card-body" style={{margin: "15px"}}>
          <div>
            <h5 className="card-title">{name}</h5>
          </div>
          <hr/>
          <div>
            <ul>
            {list.map((op) => <li key={op}><p>{op}</p></li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
import React from "react";

export default function RepoCard({ name, description, issues, link, }) {

  return (
    <div className="card text-bg-light mb-3">
      <div className="card-header"><p>Trending</p></div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>Open Issues: {issues}</p>
        <p className="card-text">{description}</p>
        <a target="_blank" rel="noopener noreferrer" href={link} className="btn btn-secondary">View</a>
      </div>
    </div>
  );
}

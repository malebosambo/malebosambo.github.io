import React, { useState, useEffect } from 'react';
import RepoTable from './repoTable';
import RepoCard from './repoCard';

export default function Repositories() {

  const [repos,setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async (username) => {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await response.json();
      setRepos(data);
    };

    fetchRepos('malebosambo');
  }, []);

  return (
    <>
      <div className="Repositories">
        <div className="Repo_Banner"><h1>My Repos</h1></div>

        {/*
        <div className="RepoFilters">
          <div className="btn-group">
            <button className="btn btn-primary m-2" onClick={() => this.filterIssues("websites")}>Websites</button>
            <button className="btn btn-primary m-2" onClick={() => this.filterIssues("apps")}>Apps</button>
          </div>
        </div>
        */}

        <div className="Repo_Table"><RepoTable /></div>
        <div className="Repo_Cards">{repos.map((repo) => <RepoCard name={repo.name} description={repo.description} issues={repo.open_issues_count} link={repo.url} />)}</div>  
      </div>
    </>
  );
}

import React, { useState, useEffect} from 'react';
import RepoItem from './repoItem';
import '../App.css';

export default function RepoTable() {

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
      <div className="Table_Response">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Created Date</th>
              <th>Topics</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo) => <RepoItem key={repo.id} name={repo.name} description={repo.description} date={repo.created_at} topics={repo.topics} link={repo.url} />)}
          </tbody>
        </table>
      </div>
    </>
  )
}








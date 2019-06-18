import React from 'react';
import Repo from './Repo';

const RepoList = props => { 
  
  const results = props.data;
  let repos;

  repos = results.map(repo => 
    <Repo name={repo.name} url={repo.html_url} description={repo.description} stargazer={repo.stargazers_count}  key={repo.id} />
  ); 
  
  console.log()
  return(
    <ul className="repo-list">
      {repos.slice(0,10)}
    </ul> 
  )
}

export default RepoList;

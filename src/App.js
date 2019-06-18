import React, { Component } from 'react';
import axios from 'axios';
import RepoList from './Component/RepoList';

export default class App extends Component{
  constructor() {
    super();
    this.state = {
      repos: []
    };
  }

  componentDidMount(){
    this.gitRepo()
  }

  gitRepo = () => {
    axios.get('https://api.github.com/search/repositories?q=es6').then(response => {
      this.setState({
        repos: response.data.items
      })
    })
  }

  render(){
    return (
      <div className="main-content">
      {
        <div>
          <RepoList data={this.state.repos} />
        </div>
      }          
      </div>
    )
  }
};
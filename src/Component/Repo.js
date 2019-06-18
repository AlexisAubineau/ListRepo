import React from 'react';
import './Repo.css';

const Repo = props => (
    <div className="card"> 
        <div>
            <div className="card-body">
                <h1 className="card-title">{props.name}</h1>
                <p className="card-text">{props.description}</p>
                <p className="card-title">Stars: {props.stargazer}</p>
            </div>
            <div className="card-footer">
                <a href={props.url} target="_blank"> Lien du depot</a>
            </div>
        </div>
    </div>
);

export default Repo;
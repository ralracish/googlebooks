import React from "react";

function GoogleBooksList(props) {
    return (
        <li className="list-group-item">
            <SearchResultContainer>
            {props.results.map(result=>{
                <div>
                    <img className="thumbnail" alt={props.image} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
                    <h1>Title: {props.title}</h1>
                    <h3>Authors: {props.authors}</h3>
                    <h3>Description: {props.description}</h3>
                    <a href="link">Link: {props.link}</a>
                </div>
            })}
            </SearchResultContainer>
        </li>
    );
}

export default GoogleBooksList;

import React from "react";

function SavedBooksList(props) {
    return (
        <li className="list-group-item">
            {props.results.map(result => {
                return (<div>
                    <img
                        className="thumbnail img-fluid"
                        alt={result.title}
                        src={result.image}
                        style={{ margin: "0 auto" }}
                    />
                    <h2>Title: {result.title}</h2>
                    <h3>Authors: {result.authors}</h3>
                    <h3>Description: {result.description}</h3>
                    <a href="link">Link: {result.link}</a><br />
                </div>
                )
            })}
        </li>
    );
}

export default SavedBooksList;
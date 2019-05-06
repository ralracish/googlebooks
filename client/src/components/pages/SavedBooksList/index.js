import React from "react";
import './style.css';

function SavedBooksList(props) {
    return (
        <li className="list-group-item">
            {props.results.map(result => {
                return (
                <div>
                    <div className="row">
                        <div className="col-md-2">
                            <img
                                className="thumbnail img-fluid"
                                alt={result.title}
                                src={result.image}
                                style={{ margin: "0 auto" }}
                            />
                        </div>
                        <div className="col-md-10">
                            <h2>Title: {result.title}</h2>
                            <h3>Authors: {result.authors}</h3>
                            <h5>Description: {result.description}</h5>
                            <a href="link">Link: {result.link}</a>
                        <br />
                        <br />
                        <hr />
                        </div>
                    </div>
                </div>
                )
            })}
        </li>
    );
}

export default SavedBooksList;
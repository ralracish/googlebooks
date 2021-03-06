import React from "react";

function GoogleBooksList(props) {
    return (
        <li className="list-group-item">
            {props.results.map(result => {
                if (result.volumeInfo.title || result.volumeInfo.authors) {
                    return (
                        <div>
                            <div className="row">
                                <div className="col-md-2">
                                    <img
                                        className="thumbnail img-fluid"
                                        alt={result.volumeInfo.imageLinks.smallThumbnail}
                                        src={result.volumeInfo.imageLinks.smallThumbnail}
                                        style={{ margin: "0 auto" }}
                                    />
                                </div>
                                <div className="col-md-10">
                                    <h2>Title: {result.volumeInfo.title}</h2>
                                    <h3>Authors: {result.volumeInfo.authors}</h3>
                                    <h5>Description: {result.volumeInfo.description}</h5>
                                    <a href="link">Link: {result.volumeInfo.infoLink}</a><br />
                                    <a onClick={() => props.saveBook(result)} className="btn btn-success" bookId={result.volumeInfo.id}>Save Book</a>
                                </div>
                            </div>
                            <br />
                            <br />
                            <hr />
                        </div>
                    )
                } else {
                    return (
                        <h1>No Results Found!</h1>
                    )}
            })}
        </li>
    );
}

export default GoogleBooksList;

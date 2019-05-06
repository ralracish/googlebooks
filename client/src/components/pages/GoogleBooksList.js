import React from "react";

function GoogleBooksList(props) {
    return (
        <li className="list-group-item">
            {/* <SearchResultContainer> */}
            {props.results.map(result => {
                return (<div>
                    <img
                        className="thumbnail img-fluid"
                        alt={result.volumeInfo.imageLinks.smallThumbnail}
                        src={result.volumeInfo.imageLinks.smallThumbnail}
                        style={{ margin: "0 auto" }}
                    />
                    <h2>Title: {result.volumeInfo.title}</h2>
                    <h3>Authors: {result.volumeInfo.authors}</h3>
                    <h3>Description: {result.volumeInfo.description}</h3>
                    <a href="link">Link: {result.volumeInfo.infoLink}</a><br/>
                    <a onClick={()=>props.saveBook(result)} className="btn btn-success" bookId={result.volumeInfo.id}>Save Book</a>
                </div>
        )})}
            {/* </SearchResultContainer> */}
        </li>
    );
}

export default GoogleBooksList;

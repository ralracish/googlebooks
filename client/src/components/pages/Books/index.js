import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import API from "../../../util/API";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
// import SearchBtn from "../SearchBtn"
import GoogleBooksAPI from "../../../util/GoogleBooksAPI"

class Books extends Component {
    state = {
        books: [],
        title: "",
        authors: "",
        description: "",
        image: "",
        link: ""
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data, title: "", author: "", synopsis: "" })
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveBook({
                image: this.state.image,
                title: this.state.title,
                authors: this.state.authors,
                description: this.state.description,
                link: this.state.link
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Search for a Book</h1>
                        </Jumbotron>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Books On My List</h1>
                        </Jumbotron>
                        ) : (
                                <h3>No Results to Display</h3>
                    </Col>
                </Row>
            </Container>
        );
    }


export default Books;

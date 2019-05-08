import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import API from "../../../util/API";
import { Container, Row, Col } from 'react-bootstrap';
import SearchForm from "../SearchForm";
import GoogleBooksAPI from "../../../util/GoogleBooksAPI"
import GoogleBooksList from "../GoogleBooksList";
// import SavedBooksList from "../SavedBooksList";

class Books extends Component {
    state = {
        books: [],
        title: "",
        authors: "",
        description: "",
        image: "",
        link: "",
        searchResults: [],
        loadComplete: false,
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => {
                console.log(res)
                this.setState({ books: res.data, }, () => {
                    this.setState({ loadComplete: true })
                })
            })
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

    handleSave = book => {
        console.log(book)
        if (book) {
            API.saveBook(book.volumeInfo)
                .then(res => {
                    console.log(res);
                    this.loadBooks()
                })
                .catch(err => console.log(err));
        }
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.search)
        if (this.state.search) {
            GoogleBooksAPI.search(this.state.search)
                .then(res => {
                    this.setState({ searchResults: res.data.items }, () => {
                        console.log(this.state.searchResults)
                    })
                })
                .catch(err => console.log(err))
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>(React) Google Book Search</h1>
                        </Jumbotron>
                    </Col>
                    <SearchForm
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                    <GoogleBooksList
                        results={this.state.searchResults}
                        saveBook={this.handleSave}
                    />
                    {/* <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Books On My List</h1>
                            {
                                this.state.loadComplete &&
                                <SavedBooksList results={this.state.books} />
                            }
                        </Jumbotron>
                    </Col> */}
                </Row>
            </Container>
        );
    }
}

export default Books;

import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { Container, Row, Col } from 'react-bootstrap';
import SavedBooksList from "../SavedBooksList";
import API from "../../../util/API";

class Saved extends Component {
    state = {
        books: [],
        title: "",
        authors: "",
        description: "",
        image: "",
        link: "",
        loadComplete: true,
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
    
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Books On My List</h1>
                            {
                                this.state.loadComplete &&
                                <SavedBooksList results={this.state.books} />
                            }
                        </Jumbotron>
                    </Col>
                </Row >
            </Container >
        )
    }
}
                    
                
export default Saved
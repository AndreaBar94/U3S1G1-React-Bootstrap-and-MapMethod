import { Component } from "react";
import {Card, Row, Col} from 'react-bootstrap';
import scifi from "../data/scifi.json";

class AllTheBooks extends Component {
    state = {
        initialValue: null
    }
    render(){
        return(
            <Row className="bg-warning bg-opacity-50 g-4 px-5">
                {scifi.map((book)=> (
                    <Col className="col-12 col-md-4 col-lg-3 col-xl-2">
                        <Card key={`book-${book.asin}`}>
                            <Card.Img  src={book.img} className="img-fluid contain"/>
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>
                                {book.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
            ))}
            </Row>
        )
    }
}

export default AllTheBooks;
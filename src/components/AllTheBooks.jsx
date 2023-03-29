import { Component } from "react";
import {Card, Row, Col, Form, FormControl} from 'react-bootstrap';
import scifi from "../data/scifi.json";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";

class AllTheBooks extends Component {
    state = {
        initialValue: null
    }
    handleChange = (event) => {
        this.setState({initialValue: event.target.value});
    }
    render(){
        return(
            <>
            <div className="bg-warning bg-opacity-25 p-5">
            <Form>
                <FormControl 
                    type="text" 
                    placeholder="Select a category (fantasy, history, horror, romance, scifi)" 
                    onChange={this.handleChange} />
            </Form>
            </div>
            

            {this.state.initialValue === 'scifi' && (
            <Row className="bg-warning bg-opacity-50 p-5">
                {scifi.map((scifibook, index) => (
                <Col key={`scifi-book-${index}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
                    <Card >
                    <Card.Img src={scifibook.img} className="img-fluid contain" />
                    <Card.Body>
                        <Card.Title>{scifibook.title}</Card.Title>
                        <Card.Text>
                        € {scifibook.price}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            )}

            {this.state.initialValue === 'fantasy' && (
            <Row className="bg-warning bg-opacity-50 p-5">
                {fantasy.map((fantasybook, index) => (
                <Col key={`fantasy-book-${index}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
                    <Card >
                    <Card.Img src={fantasybook.img} className="img-fluid contain" />
                    <Card.Body>
                        <Card.Title>{fantasybook.title}</Card.Title>
                        <Card.Text>
                        € {fantasybook.price}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            )}

            {this.state.initialValue === 'history' && (
            <Row className="bg-warning bg-opacity-50 p-5">
                {history.map((historybook, index) => (
                <Col key={`history-book-${index}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
                    <Card >
                    <Card.Img src={historybook.img} className="img-fluid contain" />
                    <Card.Body>
                        <Card.Title>{historybook.title}</Card.Title>
                        <Card.Text>
                        € {historybook.price}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            )}

            {this.state.initialValue === 'horror' && (
            <Row className="bg-warning bg-opacity-50 p-5">
                {horror.map((horrorbook, index) => (
                <Col key={`horror-book-${index}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
                    <Card >
                    <Card.Img src={horrorbook.img} className="img-fluid contain" />
                    <Card.Body>
                        <Card.Title>{horrorbook.title}</Card.Title>
                        <Card.Text>
                        € {horrorbook.price}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            )}

            {this.state.initialValue === 'romance' && (
            <Row className="bg-warning bg-opacity-50 p-5">
                {romance.map((romancebook, index) => (
                <Col key={`romance-book-${index}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
                    <Card >
                    <Card.Img src={romancebook.img} className="img-fluid contain" />
                    <Card.Body>
                        <Card.Title>{romancebook.title}</Card.Title>
                        <Card.Text>
                        € {romancebook.price}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            )}
            </>
        )
    }
}

export default AllTheBooks;
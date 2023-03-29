import Nav from 'react-bootstrap/Nav';

function MyNav() {
    return (
        <Nav
        className="justify-content-center p-3 bg-warning bg-opacity-50"
        activeKey="/home"
        >
            <Nav.Item>
                <Nav.Link className="text-dark" href="#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-dark" href="#">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-dark" href="#">Browse</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default MyNav;
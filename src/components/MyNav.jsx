import Nav from 'react-bootstrap/Nav';

function MyNav() {
    return (
        <Nav
        className="justify-content-center p-3 bg-secondary"
        activeKey="/home"
        >
            <Nav.Item>
                <Nav.Link className="text-light" href="#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-light" href="#">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-light" href="#">Browse</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default MyNav;
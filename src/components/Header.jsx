import { Navbar, Container, Form, Button, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const navItem = {
	color : '#fff',
	textDecoration : 'none',
	marginLeft : '10px'
}

function Header() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#"><img width="120" src="https://blog.kakaocdn.net/dn/pKALf/btqVvPRG3yj/BxD2ZwGyYFM3u913egJ9w1/img.png" alt="넷플릭스 로고" /></Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
						<Link to="/" style={navItem}>Home</Link>
						<Link to="/movies" style={navItem}>Movies</Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
						<Button variant="outline-danger">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
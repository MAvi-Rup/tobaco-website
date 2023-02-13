import React from 'react';
import {Nav, Container, Row, Col, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
const SideNavbar = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={12} className='p-5'>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            
                            {/* <NavDropdown title="Reports" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Sales Report</NavDropdown.Item>
                <NavDropdown.Item href="#">Gross Revenue</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Yearly Sales</NavDropdown.Item>
              </NavDropdown> */}
                            <Nav.Link className="dropdown-toggle"  data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                About us
                            </Nav.Link>
                            <div class="collapse ms-3" id="collapseExample">
                            <Link className="nav-link" to="sales">Our History</Link>
                            <Link className="nav-link" to="gross-revenue">Our Brands</Link>
                            <NavDropdown.Divider />
                            <Link className="nav-link" to="yearly-sales">Our Culture</Link>
                                
                            </div>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SideNavbar;
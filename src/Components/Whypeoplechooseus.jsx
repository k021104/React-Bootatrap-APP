import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Whypeoplechooseus.css';

export const Whypeoplechooseus = () => {
    return (
        <>
            <Container className='py-5 whychooseus'>
                <Row>
                    <Col md={12} className='text-center'><h1>Why People <span className='px-2' style={{ backgroundColor: '#e6f0ef' }}> CHOOSE US</span></h1></Col>
                </Row>
                <Row className="d-flex mt-5 pt-3">
                    <Col md={4} className='text-center'>
                        <i class="fa-solid fa-calendar iconbox"></i>
                        <h4>25+ Years Experience</h4>
                        <p>Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                    </Col>
                    <Col md={4} className='text-center'>
                        <i class="fa-solid fa-list iconbox"></i>
                        <h4>Best Interior Design</h4>
                        <p>Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                    </Col>
                    <Col md={4} className='text-center'>
                        <i class="fa-solid fa-pencil iconbox"></i>
                        <h4>Innovative Architects</h4>
                        <p>Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                    </Col>
                </Row>

                <Row className="d-flex mt-5">
                    <Col md={4} className='text-center'>
                        <i class="fa-solid fa-pencil iconbox"></i>
                        <h4>Customer Satisfaction</h4>
                        <p>Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                    </Col>
                    <Col md={4} className='text-center'>
                        <i class="fa-solid fa-hand-holding-dollar iconbox"></i>
                        <h4>Budget Friendly</h4>
                        <p>Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                    </Col>
                    <Col md={4} className='text-center'>
                        <i class="fa-solid fa-check iconbox"></i>
                        <h4>Sustainable Material</h4>
                        <p>Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

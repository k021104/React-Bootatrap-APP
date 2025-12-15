import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import testimonial1 from '../assets/img/testimonial-1.jpg';
import testimonial2 from '../assets/img/testimonial-2.jpg';
import testimonial3 from '../assets/img/testimonial-3.jpg';
import './Testimonial.css';

export const Testimonial = () => {
    return (
        <>
            <Container className='py-3 services'>
                <Row>
                    <Col>
                        <Carousel fade  indicators={true} controls={false} >
                            <Carousel.Item>
                                <Row>
                                    <Col lg={6} md={6} sm={12} xs={12} style={{padding: '50px 50px 50px 50px'}}>
                                        <img src={testimonial1} className='img-fluid' style={{boxShadow: '20px 20px 0px #0D6B68'}}></img>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className='d-flex flex-column justify-content-center'>
                                        {/* <Carousel.Caption> */}
                                        <h3 style={{ color: '#03201f' }}>Sustainable Material</h3>
                                        <p style={{ color: '#555555' }}>
                                            Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet
                                        </p>
                                        <h5>Boris Johnson</h5>
                                        {/* </Carousel.Caption> */}
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col lg={6} md={6} sm={12} xs={12} style={{padding: '50px 50px 50px 50px'}}>
                                        <img src={testimonial2} className='img-fluid' style={{boxShadow: '20px 20px 0px #0D6B68'}}></img>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className='d-flex flex-column justify-content-center'>
                                        {/* <Carousel.Caption> */}
                                        <h3 style={{ color: '#03201f' }}>Customer Satisfaction</h3>
                                        <p style={{ color: '#555555' }}>
                                            Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat ameterat amet
                                        </p>
                                        <h5>Alexander Bell</h5>
                                        {/* </Carousel.Caption> */}
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col lg={6} md={6} sm={12} xs={12} style={{padding: '50px 50px 50px 50px'}}>
                                        <img src={testimonial3} className='img-fluid' style={{boxShadow: '20px 20px 0px #0D6B68'}}></img>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className='d-flex flex-column justify-content-center'>
                                        {/* <Carousel.Caption> */}
                                            <h3 style={{ color: '#03201f' }}>Budget Friendly</h3>
                                            <p style={{ color: '#555555' }}>
                                                Diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet
                                            </p>
                                            <h5>Bradley Gordon</h5>
                                        {/* </Carousel.Caption> */}
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

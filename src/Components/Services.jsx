import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import service1 from '../assets/img/service-1.jpg';
import service2 from '../assets/img/service-2.jpg';
import service3 from '../assets/img/service-3.jpg';
import service4 from '../assets/img/service-4.jpg';
import './Services.css';

export const Services = () => {
    return (
        <>
            <Container className='py-3 services'>
                <Row>
                    <Col lg={6} md={12} sm={12} className='d-flex flex-column justify-content-center pe-lg-5'>
                        <Row>
                            <Col>
                                <h1 className=''>Our Creative<br></br> <span className='px-2' style={{ backgroundColor: '#e6f0ef' }}>SERVICES</span></h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className='my-4' style={{ color: '#555555' }}>Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                                <p style={{ color: '#555555' }}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='pt-3'>
                                <div className='d-flex'>
                                    <div className='phoneicon d-flex justify-content-center align-items-center text-white px-5' style={{ backgroundColor: "#0D6B68", width: '70px' }}>
                                        <PhoneEnabledIcon style={{ fontSize: '32px', fontWeight: '900' }} />
                                    </div>
                                    <div className='phoneinfo p-3 w-100' style={{ backgroundColor: '#e6f0ef' }}>
                                        <h3 style={{ color: '#03201F' }}>+0123456789</h3>
                                        <span className='' style={{ color: '#555555' }}>Call us direct 24/7 for get a free consultation</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={12} sm={12} className='pt-lg-0 pt-4'>
                        <Row>
                            <Col lg={6} md={6} sm={12} xs={12} className='darkgreenbox mx-0 p-3 px-4 m-0'>
                                <h3>Interior Design</h3>
                                <img src={service1} alt='service-1' className='img-fluid w-100'></img>
                                <p className='pt-3'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} className='lightgreenbox mx-0 p-3 px-4 m-0'>
                                <h3>Interior Design</h3>
                                <img src={service1} alt='service-1' className='img-fluid w-100'></img>
                                <p className='pt-3'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} className='lightgreenbox mx-0 p-3 px-4 m-0'>
                                <h3>Interior Design</h3>
                                <img src={service1} alt='service-1' className='img-fluid w-100'></img>
                                <p className='pt-3'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} className='darkgreenbox mx-0 p-3 px-4 m-0'>
                                <h3>Interior Design</h3>
                                <img src={service1} alt='service-1' className='img-fluid w-100'></img>
                                <p className='pt-3'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import team1 from '../assets/img/team-1.jpg';
import team2 from '../assets/img/team-2.jpg';
import team3 from '../assets/img/team-3.jpg';
import team4 from '../assets/img/team-4.jpg';
import './Designers.css';

export const Designers = () => {
    return (
        <div style={{ backgroundColor: '#e6f0ef' }}>
            <Container className='py-5 mt-5 designers'>
                <Row className='py-5'>
                    <Col>
                        <h1>Our Professional <span>DESIGNERS</span></h1>
                    </Col>
                </Row>
                <Row  className='pb-4'>
                    <Col lg={3} md={6} sm={12} xs={12}>
                        <div className='imagebox position-relative'>
                            <img src={team1} alt='team1' className='img-fluid w-100'></img>

                            <div className="image-overlay"></div>

                            <div className='imagecontentbox position-absolute text-white' style={{ top: 210, left: 20 }}>
                                <small style={{ backgroundColor: '#0D6B68', padding: '3px 15px' }}>Architect</small>
                                <h4 className='py-2 text-light'>Boris Johnson</h4>
                                <div className='d-flex justify-content-lg-start my-3 my-sm-0 my-md-0 my-lg-0 align-items-center'>
                                    <div className='d-flex iconbox'>
                                        <i class="fa-brands fa-facebook-f" style={{ width: '36px', textAlign: "center" }}></i>
                                    </div>
                                    <div className='d-flex iconbox'>
                                        <i class="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className='d-flex iconbox'>
                                        <i class="fa-brands fa-instagram"></i>
                                    </div>
                                    <div className='d-flex iconbox'>
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12}>
                        <div className='imagebox position-relative'>
                            <img src={team2} alt='team2' className='img-fluid w-100'></img>

                            <div className="image-overlay"></div>

                            <div className='imagecontentbox position-absolute text-white' style={{ top: 210, left: 20 }}>
                                <small style={{ backgroundColor: '#0D6B68', padding: '3px 15px' }}>Architect</small>
                                <h4 className='py-2 text-light'>Donald Pakura</h4>
                                <div className='d-flex justify-content-lg-start my-3 my-sm-0 my-md-0 my-lg-0 align-items-center'>
                                    <div className='d-flex iconbox'>
                                        <i class="fa-brands fa-facebook-f" style={{ width: '36px', textAlign: "center" }}></i>
                                    </div>
                                    <div className='d-flex iconbox'>
                                        <i class="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className='d-flex iconbox'>
                                        <i class="fa-brands fa-instagram"></i>
                                    </div>
                                    <div className='d-flex iconbox'>
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12}>
                        <div className='imagebox position-relative'>
                            <img src={team3} alt='team3' className='img-fluid w-100'></img>

                            <div className="image-overlay"></div>

                            <div className='imagecontentbox position-absolute text-white' style={{ top: 210, left: 20 }}>
                                <small style={{ backgroundColor: '#0D6B68', padding: '3px 15px' }}>Architect</small>
                                <h4 className='py-2 text-light'>Boris Johnson</h4>
                                <div className='d-flex justify-content-lg-start my-3 my-sm-0 my-md-0 my-lg-0 align-items-center'>
                                    <div className='d-flex iconbox'>
                                        <i class="fa-brands fa-facebook-f" style={{ width: '36px', textAlign: "center" }}></i>
                                    </div>
                                    <div className='d-flex iconbox'>
                                        <i class="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className='d-flex iconbox'>
                                        <i class="fa-brands fa-instagram"></i>
                                    </div>
                                    <div className='d-flex iconbox'>
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12}>
                        <div className='imagebox position-relative'>
                            <img src={team4} alt='team4' className='img-fluid w-100'></img>

                            <div className="image-overlay"></div>

                            <div className='imagecontentbox position-absolute text-white' style={{ top: 210, left: 20 }}>
                                <small style={{ backgroundColor: '#0D6B68', padding: '3px 15px' }}>Architect</small>
                                <h4 className='py-2 text-light'>Alexander Bell</h4>
                                <div className='d-flex justify-content-lg-start my-3 my-sm-0 my-md-0 my-lg-0 align-items-center'>
                                    <div className='d-flex iconbox'>
                                        <i class="fa-brands fa-facebook-f" style={{ width: '36px', textAlign: "center" }}></i>
                                    </div>
                                    <div className='d-flex iconbox'>
                                        <i class="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className='d-flex iconbox'>
                                        <i class="fa-brands fa-instagram"></i>
                                    </div>
                                    <div className='d-flex iconbox'>
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

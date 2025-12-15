import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about1 from '../assets/img/about-1.jpg';
import about2 from '../assets/img/about-2.jpg';
import CheckIcon from '@mui/icons-material/Check';
import Button from 'react-bootstrap/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './About.css';

export const About = () => {
    return (
        <Container className='py-5'>
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <Row className='aboutimg'>
                        <Col xs={6} className='d-flex'><img src={about1} className="img-fluid w-100 object-fit-cover"></img></Col>
                        <Col xs={6} className='d-flex flex-column'>
                            <img src={about2} className="img-fluid w-100 object-fit-cover"></img>
                            <div className='d-flex align-items-center justify-content-center' style={{ backgroundColor: '#0D6B68', width: "100%", minHeight: '96px' }}>
                                <h4 className='text-white lh-base px-4 text-center'>Award Winning Studio Since 1990</h4>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} md={12} sm={12} className='mt-lg-0 mt-3 '>
                    <Row>
                        <Col><h1><span className='px-2' style={{ backgroundColor: '#e6f0ef' }}>HISTORY</span> of Our Creation</h1></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='my-4' style={{ color: '#555555' }}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                            <p style={{ color: '#555555' }}>Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor.</p>
                        </Col>
                    </Row>
                    <Row className='my-3'>
                        <Col lg={6} md={6} sm={12} xs={12} className='py-2'>
                            <div className='d-flex'>
                                <CheckIcon className='aboutcheckicon' />
                                <h6 className='aboutchecktext ps-2'>Award Winning</h6>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className='py-2'>
                            <div className='d-flex'>
                                <CheckIcon className='aboutcheckicon' />
                                <h6 className='aboutchecktext ps-2'>24/7 Support</h6>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className='py-2'>
                            <div className='d-flex'>
                                <CheckIcon className='aboutcheckicon' />
                                <h6 className='aboutchecktext ps-2'>Professional Staff</h6>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className='py-2'>
                            <div className='d-flex'>
                                <CheckIcon className='aboutcheckicon' />
                                <h6 className='aboutchecktext ps-2'>Fair Prices</h6>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={4} sm={4} xs={12}><Button variant="success" className='w-100' style={{ backgroundColor: '#0D6B68', borderRadius: '0' }}>Read More</Button></Col>
                        <Col lg={6} md={4} sm={6} xs={12} className='d-flex justify-content-lg-start my-3 my-sm-0 my-md-0 my-lg-0 align-items-center'>
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
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

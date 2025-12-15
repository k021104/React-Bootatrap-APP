import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import project1 from '../assets/img/project-1.jpg';
import project2 from '../assets/img/project-2.jpg';
import project3 from '../assets/img/project-3.jpg';
import project4 from '../assets/img/project-4.jpg';
import project5 from '../assets/img/project-5.jpg';
import project6 from '../assets/img/project-6.jpg';
import './Ourprojects.css';

export const Ourlatestprojects = () => {
    return (
        <>
            <Container className='py-5 ourprojects'>
                <Row>
                    <Col lg={5} md={12} className='titlebox'>
                        <h1 className='text-white'>Our Latest<br></br> <span className='px-2' style={{ backgroundColor: '#e6f0ef' }}>PROJECTS</span></h1>
                        <h4 className='text-white'><span className='text-white pe-2' style={{ fontSize: '80px', fontWeight: '400' }}>6</span>of our latest projects</h4>
                    </Col>
                    <Col lg={7} md={12}>
                        <Row>
                            <Col lg={4} md={6} sm={6} xs={12} className='px-0 mx-0 p-0 m-0'>
                                <div className='imagebox position-relative'>
                                    <img src={project1} className='img-fluid' alt='project-1'></img>

                                    <div className="image-overlay"></div>

                                    <div className='imagecontentbox position-absolute text-white' style={{ top: 120, left: 20 }}>
                                        <h4>Kitchen</h4>
                                        <small>72 Projects</small>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12} className='px-0 mx-0 p-0 m-0'>
                                <div className='imagebox position-relative'>
                                    <img src={project2} className='img-fluid' alt='project-2'></img>

                                    <div className="image-overlay"></div>

                                    <div className='imagecontentbox position-absolute text-white' style={{ top: 120, left: 20 }}>
                                        <h4>Bathroom</h4>
                                        <small>67 Projects</small>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12} className='px-0 mx-0 p-0 m-0'>
                                <div className='imagebox position-relative'>
                                    <img src={project3} className='img-fluid' alt='project-3'></img>

                                    <div className="image-overlay"></div>

                                    <div className='imagecontentbox position-absolute text-white' style={{ top: 120, left: 20 }}>
                                        <h4>Bedroom</h4>
                                        <small>53 Projects</small>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12} className='px-0 mx-0 p-0 m-0'>
                                <div className='imagebox position-relative'>
                                    <img src={project4} className='img-fluid' alt='project-4'></img>

                                    <div className="image-overlay"></div>

                                    <div className='imagecontentbox position-absolute text-white' style={{ top: 120, left: 20 }}>
                                        <h4>Living Room</h4>
                                        <small>33 Projects</small>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12} className='px-0 mx-0 p-0 m-0'>
                                <div className='imagebox position-relative'>
                                    <img src={project5} className='img-fluid' alt='project-5'></img>

                                    <div className="image-overlay"></div>

                                    <div className='imagecontentbox position-absolute text-white' style={{ top: 120, left: 20 }}>
                                        <h4>Furniture</h4>
                                        <small>87 Projects</small>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12} className='px-0 mx-0 p-0 m-0'>
                                <div className='imagebox position-relative'>
                                    <img src={project6} className='img-fluid' alt='project-6'></img>

                                    <div className="image-overlay"></div>

                                    <div className='imagecontentbox position-absolute text-white' style={{ top: 120, left: 20 }}>
                                        <h4>Rennovation</h4>
                                        <small>69 Projects</small>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

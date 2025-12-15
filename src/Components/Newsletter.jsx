import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import newsletter from '../assets/img/newsletter.jpg';
import bgImage from '../assets/img/hero-bg.jpg';
import Form from 'react-bootstrap/Form';

export const Newsletter = () => {
    return (
        <div className='my-5' style={{ background: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: "no-repeat" }}>
            <Container className='py-3 services'>
                <Row>
                    <Col lg={6} md={12} sm={12} xs={12} className='pe-lg-5'>
                        <img src={newsletter} className='img-fluid w-100'></img>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12} className='py-lg-0 py-4 d-flex flex-column justify-content-center'>
                        <h1>Subscribe the <span className='bg-white px-2'>NEWSLETTER</span></h1>

                        <Form.Floating className="mt-4">
                            <Form.Control
                                id="floatingInputCustom"
                                type="email"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom">Email address</label>
                            <i class="fa-solid fa-paper-plane position-absolute fs-4" style={{top: '17px', right: '25px', cursor: 'pointer'}}></i>
                        </Form.Floating>

                        <p className='py-2' style={{color: '#555555'}}>Diam sed sed dolor stet amet eirmod</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

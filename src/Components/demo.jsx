import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import './Introduction.css';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import slider1 from '../assets/img/hero-slider-1.jpg';
import { useState } from "react";


function AutoLayoutExample() {

    const [index, setIndex] = useState(0);

    return (
        <Container>
            <Row className='py-5 d-flex justify-content-center align-items-center'>
                <Col lg={6} md={12} xs={12} className=''>
                    <h1 className='introheader'>
                        We Make Your <span>Home</span> Better
                    </h1>

                    <h5 className='px-5 py-3 my-4'>An Award Winning Studio Since 1990</h5>
                </Col>
                <Col lg={6} md={12} xs={12}>
                    <div style={{position:'relative', height: '500px', width: '300px', backgroundColor: '#ccc'}}></div>
                    <div style={{position: 'absolute', height: '400px', width: '200px', backgroundColor: 'red'}}></div>
                </Col>
            </Row>
        </Container>
    );
}

export default AutoLayoutExample;
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../assets/img/hero-slider-1.jpg";
import slider2 from "../assets/img/hero-slider-2.jpg";
import slider3 from "../assets/img/hero-slider-3.jpg";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import "./Introduction.css";

function AutoLayoutExample() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="bg-container">
            <Container>
                <Row className="py-5 d-flex justify-content-center align-items-center flex-wrap">
                    {/* Text Column */}
                    <Col lg={6} md={12} xs={12} className="">
                        <h1 className="introheader text-center text-lg-start">
                            We Make Your <span>Home</span> Better
                        </h1>
                        <h5 className="px-3 py-3 my-4 border-white mx-auto mx-lg-0">
                            An Award Winning Studio Since 1990
                        </h5>
                    </Col>

                    {/* Carousel Column */}
                    <Col lg={6} md={12} xs={12} className="d-flex justify-content-center">
                        <div className="carousel-container">
                            <Carousel>
                                <Carousel.Item>
                                    <img src={slider1} alt="slide1" className="img-fluid"></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={slider2} alt="slide1" className="img-fluid"></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={slider3} alt="slide1" className="img-fluid"></img>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-5">
                    <Col md={3} sm={6} xs={12} className="d-flex justify-content-lg-center align-items-center">
                        <SmartToyIcon className="border-white p-2 fs-1" style={{color: '0D6B68'}}/>
                        <h5 className="p-2">Crafted Furniture</h5>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="d-flex justify-content-lg-center align-items-center">
                        <SmartToyIcon className="border-white p-2 fs-1" style={{color: '0D6B68'}}/>
                        <h5 className="p-2">Sustainable Material</h5>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="d-flex justify-content-lg-center align-items-center">
                        <SmartToyIcon className="border-white p-2 fs-1" style={{color: '0D6B68'}}/>
                        <h5 className="p-2">Innovative Architects</h5>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="d-flex justify-content-lg-center align-items-center">
                        <SmartToyIcon className="border-white p-2 fs-1" style={{color: '0D6B68'}}/>
                        <h5 className="p-2">Budget Friendly</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AutoLayoutExample;

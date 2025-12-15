import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import heroImage from "../assets/img/hero-slider-1.jpg"; // your image

function HeroSectionShadow() {
    return (
        <Container className="py-5">
            <Row className="align-items-center">
                {/* Left Text */}
                <Col lg={6} md={12} className="text-center text-lg-start mb-4 mb-lg-0">
                    <h1 className="fw-bold">
                        We Make Your <span className="text-primary">Home</span> Better
                    </h1>
                    <p className="lead text-secondary">
                        An Award Winning Studio Since 1990
                    </p>
                </Col>

                {/* Right Image with Shadow */}
                <Col lg={6} md={12} className="d-flex justify-content-center">
                    <div style={{ width: "100%", maxWidth: "500px", position: "relative" }}>
                        <img
                            src={heroImage}
                            alt="Hero"
                            style={{
                                width: "100%",
                                display: "block",
                                borderRadius: "10px",
                                boxShadow: "30px 30px 0px 0px #11786b", // colored shadow block
                            }}
                        />
                    </div>
                </Col>


                <div className="custom-dots">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className={`dot ${index === i ? "active" : ""}`}
                            onClick={() => setIndex(i)}
                            style={{ cursor: "pointer" }}
                        ></div>
                    ))}
                </div>
            </Row>
        </Container>
    );
}

export default HeroSectionShadow;

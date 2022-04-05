import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import "../styles/thankyou.css";

const thankYou = (props) => {

    return (
        <div className="thankyouPage">
            <Row className="write-reviews-wrapper">
                <h2 className='text-center'>Thank you for submitting your review!</h2>
            </Row>
            <Col className="write-review-btn d-flex  p-2">
                <Link to={'/'} className='btn btn-primary thankBtn' margin-right='30px'> Home  </Link> <br />
                <Link to={'/programs'} className='btn btn-primary'>Programs</Link>
            </Col>

        </div>
    )
}

export default thankYou;
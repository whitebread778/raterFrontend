import React from 'react';
import { useState, useEffect } from 'react';
import "../styles/writeReviews.css";
import baseUrl from "../data/baseApi";
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
const writeReviews = (props) => {
    const {schoolProgramId} = useParams();
    const [score, setScore] = useState(0);
    const [review, setReview] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();
    let handleSubmit = async (e) => {
        e.preventDefault();

        // console.log({SchoolProgramId: schoolProgramId,
        //     RateNumber: Number(score),
        //     ProgramReview: review,})
        try {
            let res = await fetch(`${baseUrl}api/programrates`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    SchoolProgramId: schoolProgramId,
                    RateNumber: Number(score),
                    ProgramReview: review,
                }),
            });
            
            let resJson = await res.json();
            console.log(resJson);
            if (res.status === 200) {
                setScore(0);
                setReview("");
                setMessage("Post review successfully");
            } else {
                setMessage("Some error occured");
            }
            navigate("/thankyou");
        } catch (err) {
            console.log(err);
        }


    };


    return (
        <Container className="p-3">
        
        <div className="write-reviews-wrapper">
            <h2>Write Reviews</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalScore">
                        <Form.Label column sm={2}>
                            Score (0-5)
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control value={score} min='0' max='5' type="text" onChange={(e) => setScore(e.target.value)} placeholder="Score" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalReview">
                        <Form.Label column sm={2}>
                            Reasons
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control value={review} type="text" as="textarea" onChange={(e) => setReview(e.target.value)} placeholder="Review" />
                        </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="submitBtn">Submit</Button>
                </Form>
        </div>
        </Container>
    )
}

export default writeReviews;
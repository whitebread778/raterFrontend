import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/program.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import WriteReviews from "./writeReviews";
import baseUrl from "../data/baseApi";
import programPhoto from "../../public/programPhoto.png";
// import study from "../../public/bcit.svg";

const program = () => {
  const { schoolProgramId } = useParams();
  const [selectedProgram, setSelectedProgram] = useState(null);
  console.log(schoolProgramId);

  useEffect(() => {
    async function getSelectedProgram() {
      const resp = await fetch(`${baseUrl}api/SchoolPrograms/${schoolProgramId}`, {

          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "accept": "application/json"
          }
      });

      const data = await resp.json();
      // setSelectedProgram({
      //   programName: "Full-Stack Web Development",
      //   programDesc:
      //     "The Full-Stack Web Development Diploma (FSWD) features an interdisciplinary learning environment to prepare you for a career as a web developer. Focusing on emerging web application development tools and technologies, this unique two-year full-time program offers hands-on experience combined with industry projects to equip you for the many opportunities in this fast-growing and high-demand field.",
      //   schoolProgramId: 1,
      // });
      console.log(data);
      setSelectedProgram(data);
    }
    getSelectedProgram();
  }, []);
  if (selectedProgram) {
    return (
      <Container>
        <Card className="selected-program-section col">
          <h1 className="text-center">Program you selected</h1>
          <Row>
            <Col>
              <img src={programPhoto} className="programPhoto"/>
            </Col>
            <Col>
              <h3 className="text-center">{selectedProgram.programName}</h3>
              <p className="text-center">{selectedProgram.programDesc}</p>

              <Col
                key={selectedProgram.schoolProgramId}
                className="write-review-btn d-flex justify-content-around p-2"
              >
                <Link
                  to={`/programs/${selectedProgram.schoolProgramId}/writeReviews`}
                  className="btn btn-primary"
                >
                  Write reviews
                </Link>{" "}
                <br />
                <Link
                  to={`/programs/${selectedProgram.schoolProgramId}/reviews`}
                  className="btn btn-primary"
                >
                  Check reviews
                </Link>
              </Col>
            </Col>
          </Row>
          {/* <WriteReviews 
                    selectedProgram={selectedProgram}
                /> */}

          {/* <Col key={selectedProgram.schoolProgramId} className="write-review-btn d-flex justify-content-around p-2">
                        <Link to={`/programs/${selectedProgram.schoolProgramId}/writeReviews`} className='btn btn-primary'>Write reviews</Link> <br />
                        <Link to={`/programs/${selectedProgram.schoolProgramId}/reviews`} className='btn btn-danger'>Check reviews</Link>
                    </Col> */}
        </Card>
      </Container>
    );
  } else {
    return <div>fetching data...</div>;
  }
};

export default program;

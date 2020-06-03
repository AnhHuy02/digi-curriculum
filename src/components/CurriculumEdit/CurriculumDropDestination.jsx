import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// import Content from "./../Curriculum/Content";
import img from "./drop-content-background.jpg";
import data from "./data";

// import CourseTile from "../Curriculum/CourseTile";
import Semester from "./Semester";

const DropContent = styled.div`
  background-color: steelblue;
  background-image: url(${img});
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  padding: 20px 20px 20px 20px;
  text-align: center;
  /* Fix overflow-x visual bug */
  ::after {
    content: "";
    flex: 0 0 20px;
  }
`;

const Year = styled(Col).attrs({
  xs: "auto",
  sm: "auto",
  md: "auto",
  lg: "auto",
  xl: "auto",
})`
  background-color: rgba(220, 220, 220, 0.7);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 10px;
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

class CurriculumDropDestination extends Component {
  state = data;

  render() {
    return (
      <Container fluid>
        <Row style={{ display: "inherit" }}>
          <DropContent>
            {this.state.yearOrder.map((yearId) => {
              return (
                <Year key={yearId}>
                  <Row>
                    <Col>
                      <b>Year {yearId[yearId.length - 1]}</b>
                    </Col>
                  </Row>
                  <Row
                    noGutters
                    style={{
                      display: "flex",
                      flexWrap: "nowrap",
                      zIndex: -1,
                    }}
                  >
                    {data.years[yearId].semOrder.map((semId) => (
                      <Semester
                        key={yearId + semId}
                        yearId={yearId}
                        semId={semId}
                        courseIds={
                          data.years[yearId].semesters[semId].courseIds
                        }
                      />
                    ))}
                  </Row>
                </Year>
              );
            })}
          </DropContent>
        </Row>
        <Row>
          <div>YEET</div>
        </Row>
      </Container>
    );
  }
}

export default CurriculumDropDestination;

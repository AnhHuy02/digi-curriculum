import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { DragDropContext } from "react-beautiful-dnd";

import CurriculumActionFilter from "./CurriculumActionFilter";
import CourseDragSource from "./CourseDragSource";
import CurriculumDropDestination from "./CurriculumDropDestination";

class CurriculumEdit extends Component {

  render() {
    return (
      <Container fluid style={{ padding: "0px" }}>
        <CurriculumActionFilter />
        {/* <DragDropContext onDragEnd={this.onDragEnd}> */}
        <Row noGutters>
          <Col sm={3} md={3} lg={3} xl={3}>
            <CourseDragSource />
          </Col>
          <Col sm={9} md={9} lg={9} xl={9}>
            <CurriculumDropDestination />
          </Col>
        </Row>
        {/* </DragDropContext> */}
      </Container>
    );
  }
}

export default CurriculumEdit;

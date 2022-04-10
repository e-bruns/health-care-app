import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import MenuHeaderMain from "../_components/MenuHeaderMain";
import CardGlobal from "../_components/CardGlobal";
import { FaPlus } from "react-icons/fa";
import CardSearch from "../_components/CardSearch";
import InfinityList from "../_components/InfinityList";
import examsService from "../../services/exam";

function Exam() {
  const [search, setSearch] = useState('')

  return (
    <>
      <MenuHeaderMain />

      <div className="position-button-new">
        <Link to="/exam/new" className="btn btn-primary bottom rounded-circle">
          <h1>
            <FaPlus />
          </h1>
        </Link>
      </div>

      <Row className="justify-content-center">
        <Col md={6} xs={12} lg={6}>
          <CardSearch title={"EXAMES"} onSearch={(value) => {
            setSearch(value)
          }} />
        </Col>
      </Row>

      <InfinityList
        fetchService={examsService}
        search={search}
        renderResource={(examSingle, index) => (
          <CardGlobal
            title={examSingle.title}
            location={examSingle.exam_location}
            date={examSingle.date}
            link={"/exam/" + examSingle.id + "/detail"}
            key={examSingle.id}
          ></CardGlobal>
        )}
      />
    </>
  );
}

export default Exam;

import React, { useEffect, useState } from "react";
import MenuHeaderMain from "../_components/MenuHeaderMain";
import "../home/index.css";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import SubHeader from "./subNav";
import { Col, Row } from "react-bootstrap";
import CardSearch from "../_components/CardSearch";
import InfinityList from "../_components/InfinityList";
import treatmentShareService from "../../services/treatmentShare";
import CardGlobal from "../_components/CardGlobal";

function SharedTreatments() {
  const params = useParams();
  const id = params.id;

  const [search, setSearch] = useState("");

  return (
    <>
      <MenuHeaderMain />
      <SubHeader />    
      <Row className="justify-content-center">
        <Col md={6} xs={12} lg={6}>
          <CardSearch
            title={"TRATAMENTOS"}
            onSearch={(value) => {
              setSearch(value);
            }}
          />
        </Col>
      </Row>
      <InfinityList
        fetchService={treatmentShareService}
        parameter={id}
        search={search}
        renderResource={(treatment, index) => {
          return (
            <CardGlobal
              title={treatment.title}
              location={treatment.exam_location}
              date={treatment.date}
              link={`/share/${id}/treatments/${treatment.id}`}
              key={treatment.id}
            ></CardGlobal>
          );
        }}
      />
    </>
  );
}

export default SharedTreatments;


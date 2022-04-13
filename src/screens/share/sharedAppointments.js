import React, { useEffect, useState } from "react";
import MenuHeaderMain from "../_components/MenuHeaderMain";
import "../home/index.css";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CardGlobal from "../_components/CardGlobal";
import SubHeader from "./subNav";
import { Col, Row } from "react-bootstrap";
import CardSearch from "../_components/CardSearch";
import InfinityList from "../_components/InfinityList";
import appointmentShareService from "../../services/appointmentShare";

function SharedAppointments() {
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
            title={"CONSULTAS"}
            onSearch={(value) => {
              setSearch(value);
            }}
          />
        </Col>
      </Row>
      <InfinityList
        fetchService={appointmentShareService}
        parameter={id}
        search={search}
        renderResource={(appointment, index) => {
          return (
            <CardGlobal
              title={appointment.title}
              location={appointment.exam_location}
              date={appointment.date}
              link={`/share/${id}/appointments/${appointment.id}`}
              key={appointment.id}
            ></CardGlobal>
          );
        }}
      />
    </>
  );
}

export default SharedAppointments;

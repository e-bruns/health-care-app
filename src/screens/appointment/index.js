import React, { useEffect, useState } from "react";
import MenuHeaderMain from "../_components/MenuHeaderMain";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CardGlobal from "../_components/CardGlobal";
import instance from "../../axios";

import appointmentsService from "../../services/appointment";
import { toast } from "react-toastify";
import InfinityList from "../_components/InfinityList";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import CardSearch from "../_components/CardSearch";

function Appointments() {
  const [search, setSearch] = useState('');

  return (
    <>
      <MenuHeaderMain />

      <div className="position-button-new">
        <Link to="/appointment/new" className="btn btn-primary bottom rounded-circle">
          <h1>
            <FaPlus />
          </h1>
        </Link>
      </div>

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
        fetchService={appointmentsService}
        search={search}
        renderResource={(appointment, index) => (
          <CardGlobal
            title={appointment.title}
            location={appointment.appointment_location}
            date={appointment.date}
            link={"/appointment/" + appointment.id + "/detail"}
            key={appointment.id}
          ></CardGlobal>
        )}
      />
    </>
  );
}

export default Appointments;

import { useState } from "react";
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import MenuHeaderMain from "../_components/MenuHeaderMain";
import CardGlobal from "../_components/CardGlobal";
import CardSearch from "../_components/CardSearch";
import InfinityList from "../_components/InfinityList";
import treatmentService from '../../services/treatment'

const TreatmentsScreen = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <MenuHeaderMain />

      <div className="position-button-new">
        <Link to="/treatment/new" className="btn btn-primary bottom rounded-circle">
          <h1>
            <FaPlus />
          </h1>
        </Link>
      </div>

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
        fetchService={treatmentService}
        search={search}
        renderResource={(treatment, index) => (
          <CardGlobal
            title={treatment.title}
            location={treatment.treatment_location}
            date={treatment.date}
            link={"/treatment/" + treatment.id + "/detail"}
            key={treatment.id}
          ></CardGlobal>
        )}
      />
    </>
  );
};

export default TreatmentsScreen;
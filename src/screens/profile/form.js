import { Formik } from "formik";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import authService from "../../services/auth";
import MenuHeaderMain from "../_components/MenuHeaderMain";

import * as yup from "yup";
import FormChangePassword from "./form_change_password";
import FormChangeProfile from "./form_change_profile";

const ProfileScreen = () => {
  return (
    <>
      <MenuHeaderMain />
      <Row className="justify-content-center my-4 p-2">
        <Col xs={12} md={6}>
          <FormChangeProfile />
        </Col>
      </Row>
      <Row className="justify-content-center my-4 p-2">
        <Col xs={12} md={6}>
          <FormChangePassword />
        </Col>
      </Row>
    </>
  );
};

export default ProfileScreen;

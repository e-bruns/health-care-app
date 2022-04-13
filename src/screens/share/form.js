import { useEffect, useState } from "react";
import { isAfter, parse } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";

import MenuHeaderMain from "../_components/MenuHeaderMain";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import userShareService from "../../services/userShare";
import userService from "../../services/user";

import "./share.css";

const FormShareScreen = () => {
  const [users, setUsers] = useState();
  const [userSelected, setUserSelected] = useState();
  const [appointment, setAppointment] = useState(false);
  const [exam, setExam] = useState(false);
  const [treatment, setTreatment] = useState(false);
  const [endDate, setEndDate] = useState();
  const [errors, setErrors] = useState({
    endDate: null,
  });
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, [q]);

  async function fetchUsers() {
    const data = await userService.index(q);
    setUsers(data);
  }

  const handleShare = async (e) => {
    if (!userSelected) {
      toast.error(
        "Selecione um usuário!"
      );
      return;
    }

    if ([appointment, exam, treatment].every((el) => el === false)) {
      toast.error(
        "Você deve selecionar pelo menos um item para o compartilhamento."
      );
      return;
    }

    if (!endDate) {
      toast.error("A Date de Final do compartilhamento não pode ser vazio!");
      return;
    }

    try {
      await userShareService.create({
        user_share_id: userSelected?.id,
        medical_appointment: appointment,
        exam,
        treatment,
        end_date: endDate,
      });
      toast.success("Compartilhamento realizado com sucesso!!");
      navigate("/share");
    } catch (error) {
      if (error.response.data.errors) {
        Object.values(error.response.data.errors)[0].forEach((message) => {
          toast.error(message);
        });
      } else {
        toast.error("Falha ao criar compatilhamento! Tente novamente!");
      }
    }
  };

  return (
    <>
      <MenuHeaderMain />

      <div className="CardLast_Single">
        <div className="cardLast">
          <div className="cardLast__title text-center">COMPARTILHAR</div>
        </div>
      </div>

      <div style={{ height: "100vh" }}>
        <Row className="justify-content-center p-2">
          <Col md={6}>
            <ReactSearchAutocomplete
              items={users}
              onSearch={(value) => {
                setQ(value);
              }}
              styling={{
                height: "44px",
                border: "1px solid #dfe1e5",
                borderRadius: "4px",
                backgroundColor: "white",
                boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
                hoverBackgroundColor: "#eee",
                color: "#212121",
                fontSize: "16px",
                fontFamily: "Arial",
                iconColor: "grey",
                lineColor: "rgb(232, 234, 237)",
                placeholderColor: "grey",
                clearIconMargin: "3px 14px 0 0",
                searchIconMargin: "0 0 0 16px",
              }}
              onHover={() => {}}
              onSelect={(item) => {
                setUserSelected(item);
              }}
              onFocus={() => {}}
              autoFocus
              formatResult={(item) => (
                <div className="text-primary">{item.name}</div>
              )}
            />
          </Col>
        </Row>

        <Row className="px-2 justify-content-center">
          <Col md={6}>
            <div className="form-group">
              <label className="form-labe text-white">
                Data Final do Compartilhamento
              </label>
              <input
                type="date"
                onChange={(e) => {
                  let edt = e.target.value;
                  edt = parse(edt, "yyyy-MM-dd", new Date());
                  if (isAfter(new Date(), edt)) {
                    setErrors({
                      endDate: "Data inválida!",
                    });
                    return;
                  }
                  setErrors({ endDate: null });
                  setEndDate(edt);
                }}
                disabled={!userSelected}
                className="form-control"
              />
              {errors && (
                <label className="text-danger">{errors.endDate}</label>
              )}
            </div>
          </Col>
        </Row>

        <Row className="px-1 mt-2 m-1 justify-content-center">
          <Col className="CardShare--box" md={6}>
            <Row className="justify-content-between p-2 bg-white">
              <Col xs={1}>
                <input
                  type="checkbox"
                  disabled={!userSelected}
                  value={true}
                  onChange={() => setAppointment(!appointment)}
                />
              </Col>
              <Col className="text-start">
                <span className="ml-2">CONSULTAS</span>
              </Col>
            </Row>
            <Row className="justify-content-between p-2 bg-white">
              <Col xs={1}>
                <input
                  type="checkbox"
                  disabled={!userSelected}
                  value={true}
                  onChange={() => setExam(!exam)}
                />
              </Col>
              <Col className="text-start">
                <span className="ml-2">EXAMES</span>
              </Col>
            </Row>
            <Row className="justify-content-between p-2 bg-white">
              <Col xs={1}>
                <input
                  type="checkbox"
                  disabled={!userSelected}
                  value={true}
                  onChange={() => setTreatment(!treatment)}
                />
              </Col>
              <Col className="text-start">
                <span className="ml-2">TRATAMENTOS</span>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col xs={6} md={6}>
            <div className="d-flex gap-2">
              <Link to={"/share"} className="btn btn-secondary">
                Voltar
              </Link>
              <button
                className="btn btn-primary"
                onClick={handleShare}
                disabled={errors.endDate}
              >
                COMPARTILHAR
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FormShareScreen;

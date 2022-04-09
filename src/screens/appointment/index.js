import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuHeaderMain from "../_components/MenuHeaderMain";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FaPlus } from "react-icons/fa";
import CardGlobal from '../_components/CardGlobal';

import appointmentsService from "../../services/appointment";
import { toast } from "react-toastify";

function Appointments() {

  const [appointments, setAppointment] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAppointment();
  }, []);

  const fetchAppointment = async () => {
    try {
      const data = await appointmentsService.index({ page, search: "" });
      if (data && data.length > 0) {
        if (page === 1) {
          setAppointment(data);
        } else {
          console.log(appointments, data);
          setAppointment(appointments.concat(data));
        }
      }
    } catch (error) {
      toast.error('Falha ao carregar tratamentos');
    } finally {
      setPage(page + 1);
    }
  };

  if (appointments.length === 0) {
    return (
      <>
      <MenuHeaderMain />

      <div className='position-button-new'>
        <Link 
          to="/appointment/new"
          className="btn btn-primary bottom rounded-circle"
        >
          <h1>{" "}
          <FaPlus />{" "}
          </h1>
        </Link>
      </div>

      <div className="CardLast_Group">
        <div className='cardLast'>
          <div className='cardLast__title text-center'>CONSULTAS</div>
          <div className='cardLast__block_line '>
            <p className="text-center">NENHUMA CONSULTA CADASTRADA! <br />
            Clique em " + " para adicionar</p>
          </div>
        </div>
      </div>
      </>
    )
  } else {
    return (
      <>
        <MenuHeaderMain />

        <div className='position-button-new'>
          <Link 
            to="/appointment/new"
            className="btn btn-primary bottom rounded-circle"
          >
            <h1>{" "}
            <FaPlus />{" "}
            </h1>
          </Link>
        </div>

        <div className="CardLast_Group">
          <div className='cardLast'>
            <div className='cardLast__title text-center'>CONSULTAS</div>
            <div className='cardLast__block_line'>
              <div >
                <input type="text" className="form-control" placeholder="PESQUISAR" />
              </div>
              <div className='cardLast__button'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="CardLast_Group">

          {appointments.map((appointment) =>
            <CardGlobal title={appointment.title} exam_location={appointment.professional_name} date={appointment.date} link={'/appointment/' + appointment.id + '/detail'} key={appointment.id}></CardGlobal>
          )
          }

        </div>
      </>
    );
  }
}

export default Appointments;
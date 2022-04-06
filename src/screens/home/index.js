import React, { useEffect, useState } from 'react';
import CardLast from '../_components/CardLast';
import MenuHeaderMain from '../_components/MenuHeaderMain';
import ModalGlobal from '../_components/ModalGlobal';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './../../features/userSlice';
import instance from '../../axios';
import dashboardService from '../../services/dashboard';

function HomeScreen() {

  const user = useSelector(selectUser);

  // useEffect(() => {
  //   lastExams();
  // }, []);

  // const fetchTreatments = async (searched = false) => {
  //   try {
  //     const data = await treatmentService.index({ page: pg, q });
  //     if (data && data.length > 0) {
  //       if (pg === 1) {
  //         setTreatments(data);
  //       } else {
  //         setTreatments(treatments.concat(data));
  //       }
  //     }
  //   } catch (error) {
  //     toast.error("Falha ao carregar tratamentos");
  //   } finally {
  //     //setPage(pg + 1);
  //   }
  // };

  const consultas = [
    {
      id: 1,
      title: "Teste 001",
      date: "25/03/2021"
    },
    {
      id: 2,
      title: "Teste 002",
      date: "26/03/2021"
    },
    {
      id: 3,
      title: "Teste 003",
      date: "28/03/2021"
    }
  ];

  useEffect(() => {
    (async () => {
      const data = await dashboardService.index();
    })();
  }, []);

  return (
    <div>
      <MenuHeaderMain />
      <div className="CardLast_Group">
        <CardLast title="Últimas consultas" lasts={consultas} url="appointment" />
        <CardLast title="Últimos exames" lasts={consultas} url="exam" />
        <CardLast title="Últimos tratamentos" lasts={consultas} url="treatment" />
      </div>
    </div>
  );
}

export default HomeScreen;

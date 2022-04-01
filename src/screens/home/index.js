import React, { useState } from 'react';
import CardLast from '../_components/CardLast';
import MenuHeaderMain from '../_components/MenuHeaderMain';
import ModalGlobal from '../_components/ModalGlobal';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './../../features/userSlice';

function HomeScreen() {

  const user = useSelector(selectUser);
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

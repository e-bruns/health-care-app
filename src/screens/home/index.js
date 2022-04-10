import React, { useEffect, useState } from 'react';
import CardLast from '../_components/CardLast';
import MenuHeaderMain from '../_components/MenuHeaderMain';
import './index.css';
import dashboardService from '../../services/dashboard';

function HomeScreen() {

  const [exams, setExam] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [medical_appointments, setMedical_appointments] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await dashboardService.index();
      setExam(data.exams)
      setTreatments(data.treatments)
      setMedical_appointments(data.medical_appointments)
    })();
  }, []);
  
  return (
    <div>
      <MenuHeaderMain />
      <div className="CardLast_Group">
        <CardLast title="Últimas consultas" lasts={medical_appointments} url="appointment" />
        <CardLast title="Últimos exames" lasts={exams} url="exam" />
        <CardLast title="Últimos tratamentos" lasts={treatments} url="treatment" />
        
      </div>
    </div>
  );
}

export default HomeScreen;

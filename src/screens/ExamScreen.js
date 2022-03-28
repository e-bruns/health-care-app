import React from 'react'
import MenuHeaderMain from "./components/MenuHeaderMain"
import { Row, Col, Button } from 'react-bootstrap'
import CardGlobal from './components/CardGlobal'

function Exam() {


  return (
    <>
      <MenuHeaderMain />

      <div className='container p-3'>
        <div align="center">  
          <div className='screen-box mb-4'><h2>EXAMES</h2>
          
          </div>

          <CardGlobal> </CardGlobal>
          
          
        </div>
      </div>
    </>
  )
}

export default Exam
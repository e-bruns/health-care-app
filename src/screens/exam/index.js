import React from 'react'
import MenuHeaderMain from "../_components/MenuHeaderMain"
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import CardGlobal from '../_components/CardGlobal'

function Exam() {

  let arr=[{
    title: "EXAME DE SANGUE",
    exam_location: "UNIMED",
    date: "11/03/2021",
    link: "#",
    id: 0
  },
  {
    title: "EXAME DE ALERGIAS",
    exam_location: "VITALLAB",
    date: "19/03/2021",
    link: "#",
    id: 1
  },
  {
    title: "EXAME DE NONON",
    exam_location: "NONON",
    date: "21/03/2021",
    link: "#",
    id: 2
  }
]

// console.log(arr)



  return (
    <>
      <MenuHeaderMain />

      <div className='container mt-3 mx-auto'>
        <div className='text-center'>
          <Row className='my-auto'>
            <Col sm={6}>
              <div className='screen-box'>
                <h2>EXAMES</h2>
              </div>
            </Col>
            <Col sm={6} >
              <Button><FontAwesomeIcon icon={faMagnifyingGlass} className="text-white p-1" /></Button>
            </Col>
          </Row>  
          
            { arr.map((exam) => 
              <CardGlobal title={exam.title} exam_location={exam.exam_location} date={exam.date} link={exam.link} key={exam.id}></CardGlobal>
            )
            }
        </div>
      </div>
    </>
  )
}

export default Exam
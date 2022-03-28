import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

function CardGlobal(props) {
    return (
            <div className='screen-box shadow-sm'>
                <Row>
                    <Col sm={6}>EXAME DE SANGUE</Col>
                    <Col sm={6}><Button>DETALHAR</Button></Col>
                    <hr></hr>
                    <div>
                        <Row>
                            <Col sm={6}>UNIMED</Col>
                            <Col sm={6}>10/10/2021</Col>
                        </Row>
                    </div>
                </Row>
            </div>
    )
}

export default CardGlobal

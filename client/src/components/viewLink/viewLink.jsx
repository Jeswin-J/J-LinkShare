import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./viewLink.css";

function viewLink() {
  return (
    <Container>
            <Row className='view-link-row'>
                <Col lg={10} className='view-link-col'>        
                    <form className='view-link-form'>
                        <div className='key-input-group'>
                            <label htmlFor="url-input">Access Key </label>
                            <input type="text" id='key-input' className='form-control' placeholder='4-digit Access Key' required/>
                        </div>

                        <div className='submit-btn-view'>
                            <button type='submit' className='submit-btn'>Get Link</button>
                        </div> 
                    </form>
                    
                    
                    <div className='url-input-group'>
                      <label htmlFor="url-input">Shared URL </label>
                      <input type="url" id='url-input' className='form-control' placeholder='https://' required/>
                    </div>

                    <div className='url-input-group'>
                        <label htmlFor="url-input">Description </label>
                        <textarea type="url" id='url-input' className='form-control' placeholder='Short Description...' rows={3} required/>
                    </div>

                </Col>
            </Row>
        </Container>
  )
}

export default viewLink

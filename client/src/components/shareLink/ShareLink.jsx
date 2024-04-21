import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { NavLink } from 'react-router-dom';

import './ShareLink.css';


function ShareLink() {

    return (
        <Container>
            <Row className='share-link-row'>
                <Col lg={10} className='share-link-col'>        
                    <form>
                        <div className='url-input-group'>
                            <label htmlFor="url-input">Share URL </label>
                            <input type="url" id='url-input' className='form-control' placeholder='https://' required/>
                        </div>
                        
                        <div className='url-input-group'>
                            <label htmlFor="url-input">Description </label>
                            <textarea type="url" id='url-input' className='form-control' placeholder='Short Description...' rows={3} required/>
                        </div>

                        <div className='submit-btn-div'>
                            <button type='submit' className='submit-btn'>Share Link</button>
                            
                            <NavLink to='/view' className='view-btn'>Access Link</NavLink>
                        </div>  
                        <div style={{margin: "30px"}}>
                        <p>URL can be accessed with below Passkey</p>
                        <h1>4444</h1>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default ShareLink;

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./viewLink.css";

function ViewLink() {
    const [accessKey, setAccessKey] = useState('');
    const [sharedURL, setSharedURL] = useState('');
    const [description, setDescription] = useState('');
    const [createdOn, setCreatedOn] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!/^\d{4}$/.test(accessKey)) {
            setAccessKey("");
            setErrorMessage("Access Key must be a 4-digit number!");
            return;
        }

        const data = {
            accessKey: accessKey
        };

        try {
            const response = await fetch('http://localhost:5000/view', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json();
                setSharedURL(responseData.url);
                setDescription(responseData.description);
                setCreatedOn(responseData.created_on);
                setCreatedAt(responseData.created_at);
            } else if(response.status === 400){ 
                setAccessKey("");
                setErrorMessage("Invalid Access Key!");
            } else if (response.status === 429) {
                setAccessKey("");
                setErrorMessage("Daily Request Limit Exceeded! Please come back tomorrow.");
            } else {
                setAccessKey("");
                setErrorMessage("Unable to Process Request! Please try again later.");
            }
        } catch (error) {
            setAccessKey("");
            setErrorMessage("Unable to Process Request! Please try again later.");
        }
    };

    return (
        <Container>
            <Row className='view-link-row'>
                <Col lg={10} className='view-link-col'>        
                    <form className='view-link-form' onSubmit={handleSubmit}>
                        <div className='key-input-group'>
                            <label htmlFor="key-input">Access Key</label>
                            <input 
                                type="text" 
                                id='key-input' 
                                className='form-control' 
                                placeholder='4-digit Access Key' 
                                value={accessKey}
                                onChange={(e) => setAccessKey(e.target.value)}
                                required
                            />
                        </div>

                        <div className='submit-btn-view'>
                            <button type='submit' className='submit-btn'>Get Link</button>
                        </div> 
                    </form>

                    {sharedURL ? (
                        <>
                            <div className='url-input-group'>
                            <label htmlFor="url-input">Shared URL</label>
                            <input 
                                type="url" 
                                id='url-display' 
                                className='form-control' 
                                placeholder='Shared URL' 
                                value={sharedURL}
                                readOnly
                            />
                        </div>

                        <div className='url-input-group'>
                            <label htmlFor="url-input">Description</label>
                            <textarea 
                                id='desc-display' 
                                className='form-control' 
                                placeholder='Shared URL Description...' 
                                rows={3} 
                                value={description}
                                readOnly
                            />
                        </div>
                        <Row>
                            <Col lg={6}>
                                <div className='url-input-group'>
                                    <label htmlFor="created-on-input">Created On</label>
                                    <input 
                                        type="text" 
                                        id='created-on-display' 
                                        className='form-control' 
                                        value={createdOn}
                                        readOnly
                                    />
                                </div>
                            </Col>
                            
                            <Col lg={6}>
                                <div className='url-input-group'>
                                    <label htmlFor="created-on-input">Created At</label>
                                    <input 
                                        type="text" 
                                        id='created-on-display' 
                                        className='form-control' 
                                        value={createdAt}
                                        readOnly
                                    />
                                </div>
                            </Col>
                        </Row>
                        </>
                            ) : (
                                <div style={{ margin: "30px" }}>
                                    <p>{errorMessage}</p>
                                </div>
                        )}

                    
                </Col>
            </Row>
        </Container>
    );
}

export default ViewLink;

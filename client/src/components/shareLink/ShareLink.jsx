import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';
import './ShareLink.css';

function ShareLink() {
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [accessKey, setAccessKey] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/share', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url, description })
            });

            if (!response.ok) {
                setAccessKey();
                setUrl("");
                setDescription("");
                if (response.status === 429) {
                    setErrorMessage("Daily Share Quota Exceeded! Please try again tomorrow.");
                } else {
                    setErrorMessage("Failed To Share Link! Please try again later.");
                }
            }

            const data = await response.json();
            setAccessKey(data.access_key);
            setUrl("");
            setDescription("");

        } catch (error) {
            setAccessKey();
            setUrl("");
            setDescription("");
            setErrorMessage("Failed To Share Link! Please try again later.");
        }
    };

    return (
        <Container>
            <Row className='share-link-row'>
                <Col lg={10} className='share-link-col'>        
                    <form onSubmit={handleSubmit}>
                        <div className='url-input-group'>
                            <label htmlFor="url-input">Share URL</label>
                            <input
                                type="url"
                                id='url-input'
                                className='form-control'
                                placeholder='https://'
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div className='url-input-group'>
                            <label htmlFor="url-desc">Description</label>
                            <textarea
                                type="text"
                                id='url-desc'
                                className='form-control'
                                placeholder='Short Description...'
                                rows={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>

                        <div className='submit-btn-div'>
                            <button type='submit' className='submit-btn'>Share Link</button>
                            <NavLink to='/view' className='view-btn'>Access Link</NavLink>
                        </div>  

                        {/* Display access key if available */}
                        {accessKey ? (
                                <div style={{ margin: "30px" }}>
                                    <p>URL can be accessed with the following Passkey:</p>
                                    <h1>{accessKey}</h1>
                                </div>
                            ) : (
                                <div style={{ margin: "30px" }}>
                                    <p>{errorMessage}</p>
                                </div>
                        )}
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default ShareLink;

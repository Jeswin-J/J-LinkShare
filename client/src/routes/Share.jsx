import React from 'react'
import ShareLink from '../components/shareLink/ShareLink';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function Share() {
  return (
    <div className='share-page'>
        <Header/>
        <ShareLink/>
        <Footer />
    </div>
  )
}

export default Share;

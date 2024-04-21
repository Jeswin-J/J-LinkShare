import React from 'react'
import ViewLink from '../components/viewLink/viewLink';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function View() {
  return (
    <div className='share-page'>
        <Header/>
        <ViewLink/>
        <Footer />
    </div>
  )
}

export default View;

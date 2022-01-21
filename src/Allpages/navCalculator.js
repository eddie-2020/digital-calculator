import React from 'react';
import Calculating from '../components/Calculating';
import '../App.css';

const NavCalculatePage = () => (
  <div className="Calculator-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
    <h2 style={{ fontSize: 17, margin: 20, fontFamily: 'sans-serif' }}>Lets do a bit of maths together!</h2>
    <div className="Calc-section">
      <Calculating />
    </div>
  </div>
);

export default NavCalculatePage;

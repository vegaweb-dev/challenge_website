import React from 'react';
import logo from './images/logo1.png';

const Footer = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={logo} className="logo" alt="logo" />
            <p>
              ST Global Markets ® es una marca registrada propiedad del grupo
              internacional multirregulado de ST Global Markets Ltd ubicado en
              Poper Hennessy Street Suite 803, 8th Floor, Hennessy Tower Port
              Louis 11328, Mauritius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

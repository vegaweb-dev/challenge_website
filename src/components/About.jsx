import React from 'react'
import './About.css'
import about from './images/about.jpg'
const About = () => {
  return (
    <div className="about">
        <div className="container">
            <img src={about} alt='about'/>
            <div className='col-2'>
                <h2>About</h2>
                <span className='line'></span>
                <p>STG Markets está dirigida por profesionales del trading que saben por experiencia lo que quieren los clientes cuando operan en los mercados financieros

Nuestra experiencia combinada abarca más de 50 años en el trading de forex, materias primas, cripto y acciones en los principales mercados financieros desde Asia hasta Norte Ámerica</p>
                <p>STG Markets engloba un conjunto diverso de empresas, podemos responder a las necesidades de nuestros clientes de forma local y personalizada.</p>
                <button className="button">Explore More</button>

            </div>
        </div>
    </div>
  )
}

export default About
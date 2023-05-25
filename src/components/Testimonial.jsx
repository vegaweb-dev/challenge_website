import React from 'react';
import './Footer.css';
import user1 from './images/user1.jpeg';
import user2 from './images/user2.jpeg';
import user3 from './images/user3.jpeg';
const Testimonial = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <h2>Testimonios</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={user1} alt="user1" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
              voluptatem sapiente expedita, neque facere ratione quo sed itaque
              nihil cum quae velit provident doloribus necessitatibus placeat
              repudiandae impedit enim vero?
            </p>
            <p>
              <span>Carlos Vega</span>
            </p>
            <p>Director comercial inversiones tal</p>
          </div>

          <div className="card">
            <img src={user2} alt="user2" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque
              reprehenderit quam iusto accusantium assumenda ducimus commodi,
              repellendus quidem! Placeat molestiae magni ipsa numquam!
              Reprehenderit delectus alias nulla numquam labore.
            </p>
            <p>
              <span>ocupacion</span>
            </p>
            <p>lo que sea</p>
          </div>

          <div className="card">
            <img src={user3} alt="user3" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              odit quod laudantium inventore, non quos aliquid molestias ex
              perferendis eos, deleniti esse hic possimus, debitis eligendi
              molestiae doloremque obcaecati sequi.
            </p>
            <p>
              <span>ocupacion</span>
            </p>
            <p>a lo que ea que se dedique</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './specials.styles.scss';


const Specials = (props) => (
    <div className="specials">
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(https://iw-up.com/wp-content/uploads/2014/04/testimage-3-300x200.jpg)`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(https://iw-up.com/wp-content/uploads/2014/04/testimage-3-300x200.jpg)`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(https://iw-up.com/wp-content/uploads/2014/04/testimage-3-300x200.jpg)`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
    </div>
)

export default Specials;
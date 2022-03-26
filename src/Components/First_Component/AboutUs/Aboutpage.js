import React from 'react';
import './css/Aboutpage.css';
function Aboutpage() {
  return (
    <div className='AboutPage'>
        <div className='AboutPage__about'>
            <div className='about__Text'>
                <h1>Who we are</h1>
                <p>
                Established in the year 1996, ‘Lazimpat Engineering Works,
                ‘ is one of the best service providers in designing, manufacturing 
                and installing Fabricated Structures and other helpful products in Nepal. 
                Situated at Lazimpat- the heart of Kathmandu, Lazimpat Engineering Works (LEW),
                 has been specializing in Prefabricated Building Systems, Space Frame Structures, 
                Solar Tracker Device, Fork Lift, and Rooftop Ventilator for more than a decade.
                </p>
                <br/>
                <p>
                Lazimpat Engineering Works is currently focusing on the production and 
                promotion of mechanical technologies and is providing highly useful mechanical
                 technological services that are not easily accessible in our country.
                </p>
            </div>
            <img src='../images/banner2.jpg' alt=''/>
        </div>
        <div className='AboutPage__vedio'>
            <h1>Learn more about our work methods</h1>
            <video width="70%"  src='../images/video.mp4' alt='' controls/>
        </div>
        <div className='AboutPage__vision'>
            <div className='card'>
                <h3>Philosophy</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non scelerisque justo,
                     id scelerisque velit. Cras non scelerisque justo, id scelerisque velit. 
                    Aliquam eget ligula libero. Suspendisse ac sollicitudin mi. Quisque ullamcorper fermentum tempus.
                </p>
            </div>
            <div className='card'>
                <h3>Vision</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non scelerisque justo,
                     id scelerisque velit. Cras non scelerisque justo, id scelerisque velit. 
                    Aliquam eget ligula libero. Suspendisse ac sollicitudin mi. Quisque ullamcorper fermentum tempus.
                </p>
            </div>
            <div className='card'>
                <h3>Policy</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non scelerisque justo,
                     id scelerisque velit. Cras non scelerisque justo, id scelerisque velit. 
                    Aliquam eget ligula libero. Suspendisse ac sollicitudin mi. Quisque ullamcorper fermentum tempus.
                </p>
            </div>

        </div>
    </div>
  )
}

export default Aboutpage
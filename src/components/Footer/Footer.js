import React from 'react'
import './Footer.scss';
import {social} from './social'

function Footer() {
    return (
        <footer className="bg-dark">
            <div className="footer">
            <ul className='social-icons'>
         {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                
              </a>
            </li>
           );
         })}
         </ul>
        </div>
      <small className="signature ">
          <a href="https://www.instagram.com/facusarhan/?hl=es-la" target='_blanck' >Facundo Sarhan</a></small>
            
        </footer>
        
    )
}

export default Footer
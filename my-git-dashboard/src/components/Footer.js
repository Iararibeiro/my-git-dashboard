import React from 'react';
import githubIcon from '../img/github.svg';
import linkedinIcon from '../img/linkedin.svg';

import { Link, Route } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="Short-description">
          <p> My Git Dashboard, produces a dashboard based <br />
          in your history and Github habits.</p>
          <button className="About-btn" type="button">
             <Link to="about">Learn more</Link>
          </button>
        </div>
        <div className="Social-icons">
          <a href="https://github.com/Iararibeiro"><img src={githubIcon} className="icon" alt="Github logo" /></a>
          <a href="https://www.linkedin.com/in/iararibeiro/"><img src={linkedinIcon} className="icon" alt="LinkedIn logo" /></a>
          <p className="Signature">Iara Ribeiro 2019</p>
        </div>
      </div>
    );
  }
}

export default Footer;

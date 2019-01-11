import React from 'react';
import githubIcon from '../img/github.svg';
import linkedinIcon from '../img/linkedin.svg';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="Social-icons">
          <a href="https://github.com/Iararibeiro"><img src={githubIcon} className="icon" alt="Github logo" /></a>
          <a href="https://www.linkedin.com/in/iararibeiro/"><img src={linkedinIcon} className="icon" alt="LinkedIn logo" /></a>
        </div>
        <p className="Signature">Iara Ribeiro 2019</p>
      </div>
    );
  }
}

export default Footer;

import React from 'react';
import Header from './Header';
import icon from '../img/icon.svg';
import codeBlue from '../img/code-blue.svg';
import history from '../img/history.svg';
import openSource from '../img/open-source.svg';
import statistics from '../img/statistics.svg';
import numberOne from '../img/number-1.svg';
import numberTwo from '../img/number-2.svg';
import numberThree from '../img/number-3.svg';

class About extends React.Component {
  render(){
    return (
      <div>
      <Header />
        <div className="Welcome">
          <h1><img src={icon} alt="the icon symbol"/> My Git Dashboard </h1>
        </div>
        <div className="Section">
          <img className="Main-icon" src={codeBlue} alt="A code symbol"/>
          <p className="Main-phrase"> An easy way to provide information about your coding habits</p>
        </div>
        <div className="Section Features">
          <div className="Feature First">
            <img src={history} alt="Icon of a clock"/>
            <p> Your history of commits is used to analyze how your developer habits have changed over time <br />
            This is built using gihub open API, all the information extracted is already available at your Github page.
            </p>
          </div>
          <div className="Feature">
            <img src={statistics} alt="Icon of a graph"/>
            <p>The info of your repositories and contributions are analyzed and get interesting information from it <br />
            The analysis is simple and using the main concepts of statistics.
            </p>
          </div>
          <div className="Feature Last">
            <img src={openSource} alt="Icon the openSource symbol"/>
            <p>This project is non-profit and open-source if you have any suggestions or bugs to report, please submit an
            issue on our Github page.<br /> That means everybody can help!</p>
          </div>
        </div>
        <div className="Section">
          <img className="Main-icon" src={codeBlue} alt="A code symbol"/>
          <p className="Main-phrase"> How it works? </p>
          <div className="Step">
            <img src={numberOne} alt="Number one" />
            <p>You type the github user handle, and click on Generate</p>
          </div>
          <div className="Step">
            <img src={numberTwo} alt="Number two" />
            <p>The server will request your info from Github api, consolidate the data and generate the reports.</p>
          </div>
          <div className="Step">
            <img src={numberThree} alt="Number three" />
            <p>The page will display the data related to your account summarized in graphs and tables</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;

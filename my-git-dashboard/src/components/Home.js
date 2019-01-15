import React from 'react';
import octProfile from '../img/octprofile.svg';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.value);

  }

  render(){
    return (
      <div className="dashboard">
        <div className="UserPicture">
          <img src={octProfile} alt="the octcat image"/>
        </div>
        <div className="UserSubmit">
          <form>
            <label>
              Type the User handle and click in generate <br />
              <input type="text" name="name" placeholder="@userhandle" />
              <br />
            </label>
            <button className="GenerateBtn" type="button" onClick="handleSubmit()" >
              Generate
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Home;

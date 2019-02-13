import React from 'react';
import octProfile from '../img/octprofile.svg';
import axios from 'axios';
import icon from '../img/icon.svg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userhandle: '',
      userimg: octProfile,
      hideInput: true
    };

    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInputValue(event) {
    this.setState({ userhandle: event.target.value });
  }

  handleSubmit(event) {
    axios.get('https://my-git-dashboard-server.herokuapp.com/userimg/' + this.state.userhandle )
      .then(response => this.setState({
        userimg: response.data ,
        hideInput: false
      } ));
    event.preventDefault();

  }

  render(){
    return (
      <div className="dashboard">
        <div className="box">
          <h1><img src={icon} alt="the icon symbol"/> My Git Dashboard </h1>
          <div className="UserPicture">
            <img src={this.state.userimg} alt="the octcat"/>
          </div>
          <div className="UserSubmit">
            <form>
              <label>
                { this.state.hideInput ? <p>Type the User handle and click in generate <br /></p> :
                  <p> This is your user?<br /></p>}
                { this.state.hideInput ? <input type="text" name="name" placeholder="@userhandle"
                value={this.state.userhandle} onChange={this.updateInputValue}/> : null }
                <br />
              </label>
              <button className="Default-btn" type="button" onClick={this.handleSubmit} >
                Generate
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

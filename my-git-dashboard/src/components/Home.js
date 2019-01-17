import React from 'react';
import octProfile from '../img/octprofile.svg';
import axios from 'axios';


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
        <div className="UserPicture">
          <img src={this.state.userimg} alt="the octcat image"/>
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
            <button className="GenerateBtn" type="button" onClick={this.handleSubmit} >
              Generate
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Home;

import React, { Component } from 'react';
import '../css/App.css';
import Logo from './Logo'

class Index extends Component {
  render() {
    return (
      <div className="Container">
        <Logo></Logo>
        <hr></hr>
        <GoogleLoginBtn></GoogleLoginBtn>
      </div>
    );
  }
}

export default Index;

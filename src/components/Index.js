import React, { Component } from 'react';
import Logo from './Logo'
import GoogleLoginBtn from './GoogleLoginBtn'

class Index extends Component {
  render() {
    return (
      <div className="Container centered both columnDirection">
        <div className="Bar"></div>
        <Logo></Logo>
        <div className="Line"></div>
        <GoogleLoginBtn></GoogleLoginBtn>
      </div>
    );
  }
}

export default Index;

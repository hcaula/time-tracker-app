import React, { Component } from 'react';
import Logo from './Logo'
import GoogleLoginBtn from './GoogleLoginBtn'
import '../css/Index.css';
import 'semantic-ui-react-css/semantic.min.css';

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

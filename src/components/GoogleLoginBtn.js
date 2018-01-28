import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import { config } from '../config'
 
class GoogleLoginBtn extends Component {
  
  login(e){

  }

  render() {
    return (
      <Button onClick={login} color='google plus'><Icon name='google'></Icon>Sign in with Google</Button>
    );
  }
}

export default GoogleLoginBtn;

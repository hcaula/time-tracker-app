import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'

class GoogleLoginBtn extends Component {
  render() {
    return (
      <Button color='google plus'><Icon name='google'></Icon>Sign in with Google</Button>
    );
  }
}

export default GoogleLoginBtn;

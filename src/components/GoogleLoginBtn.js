import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import { config } from '../config'
import rp from 'request-promise'

class GoogleLoginBtn extends Component {
  
  login(e){
    var request = {
      uri: config.api_url + '/login',
      method: 'GET'
    }

    rp(request).then(() => console.log("Alright!")).catch((err) => console.log(err));
  }

  render() {
    return (
      <Button onClick={this.login} color='google plus'><Icon name='google'></Icon>Sign in with Google</Button>
    );
  }
}

export default GoogleLoginBtn;

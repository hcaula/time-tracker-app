import React, { Component } from 'react'; 
import { Icon } from 'semantic-ui-react'
import GoogleLogin from 'react-google-login';
class GoogleLoginBtn extends Component {
  
  responseGoogle(response){
    console.log(response);
  }

  render() {
    return (
        <GoogleLogin
        clientId="766044722529-hnq5ohm4o3f4jclfs3dq6plgt3ad7nmk.apps.googleusercontent.com"
        responseType="code"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}>
        <Icon className="GoogleIcon" name="google"/>
        <span className="LoginWithGoogle"> Login with Google</span>
        </GoogleLogin>
    );
  }
}

export default GoogleLoginBtn;

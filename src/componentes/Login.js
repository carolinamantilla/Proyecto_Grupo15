import React from 'react';
import GoogleLogin from 'react-google-login';


const responseGoogle = (response) => {
    console.log(response);
  }

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <GoogleLogin 
            clientId="892636235404-l62fs4fq03m2eds9okkqskfdb5v2i10q.apps.googleusercontent.com"
            buttonText="Iniciar Sesión"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            />

         );
    }
}
 
export default Login;
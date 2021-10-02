import './App.css';
import React from 'react';
import GoogleLogin from 'react-google-login';
import {Container} from 'reactstrap';

const responseGoogle = (response) => {
  console.log(response);
}

function App() {
 return(
  <Container>
      <div className="App">
        <b /><b />
        <GoogleLogin 
        clientId="892636235404-l62fs4fq03m2eds9okkqskfdb5v2i10q.apps.googleusercontent.com"
        buttonText="Iniciar Sesión"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
      </div>
      
      
    </Container>
  );
}

export default App;

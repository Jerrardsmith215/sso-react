import React from 'react';

// import dependencies
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import { AuthContextProvider } from './components/auth/AuthProvider';
import Success from './components/Success';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous" />
        <title>React-SSO By Jerrard</title>
      </Helmet>
      <AuthContextProvider>
        <Router>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/success" component={Success} ></Route>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
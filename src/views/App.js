import logo from './logo.svg';
import './App.scss';
import Listtodo from './todos/listtodo'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navigation from './nav/nav.js'
import MyComponent from './example/MyComponent'
import Home from './example/home'
import ListUsers from './Users/Listusers';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import DetailUsers from './Users/DetailUsers'




let App = () => {
  return (
    <BrowserRouter>
  
    <div className="App">
      <Navigation></Navigation>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/todo">
            <Listtodo/>
          </Route>
          <Route path="/about">
           <MyComponent/>
          </Route>
          <Route path={"/user"} exact>
            <ListUsers/>
          </Route>
          <Route path={"/user/:id"}>
          <DetailUsers></DetailUsers>
          </Route>
        </Switch>
     
       

        
      </header>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
      
    </div>
    </BrowserRouter>
  );
}

export default App;

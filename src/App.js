import './App.css';
import { Route ,Switch } from "react-router-dom";
import  Homepage  from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component'
import SignIn from "./components/signandsignup/signin-and-signup.component";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}  />
        <Route  path='/shop' component={ShopPage}  />
        <Route  path='/signin' component={SignIn}  />

      </Switch> 
    </div>
  );
}

export default App;

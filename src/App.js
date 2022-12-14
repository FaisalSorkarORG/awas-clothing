import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/ShopPage.component';
import SignInAndSignUp from './components/sign-in-sign-up/sign-in-sign-up.component';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';


class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapShot) =>{
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
        this.setState({currentUser: userAuth});
    });
  };

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <BrowserRouter>
        <Header currentUser = {this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element= {<ShopPage />} />
          <Route path='/signin' element= {<SignInAndSignUp />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
}

export default App;

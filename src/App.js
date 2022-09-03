//LIBRARIES
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Axios from 'axios';
import { useDispatch } from 'react-redux';

//ACTIONS
import { loginAction } from './action/userAction';
import { API_URL } from './helper';

//COMPONENTS
import ControlBar from './components/ControlBar';
import HeaderBar from './components/HeaderBar';

//PAGES
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import VerificationPage from './pages/VerificationPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterGooglePage from './pages/RegisterGooglePage';
import RegisterQweeckPage from './pages/RegisterQweeckPage';
import React from 'react';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import PostCard from './pages/post/PostCard';
import CreatePostCard from './pages/post/CreatePostCard';
import ProfileSettingPage from './pages/ProfileSettingPage';



function App() {

  const [loading, setLoading] = React.useState(true);
  //STATE LOADING SEDANG AKTIF

  const dispatch = useDispatch();



  const keepLogin = () => {

    let username = localStorage.getItem('usernameLogStore')
    //let iduser = localStorage.getItem('')

    if (username) {
      Axios.post(API_URL + "/auth/keeplogin", {
       username,
       //iduser
      }).then((res) => {
        if (res.data.length == 0) {
          localStorage.setItem('userLogStore', res.data[0].username)
          setLoading(false)
          dispatch(loginAction(res.data[0]));
        }
      }).catch((err) => {
        console.log(err)
        //error502
      })
    } else {
      setLoading(false)
    }

  }
  React.useEffect(() => {
    keepLogin()
  }, []);


  return (
    <div className="App">
      <HeaderBar loading={loading} />
      <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/profile/setting' element={<ProfileSettingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/post' element={<PostCard />} />
        <Route path='/post/create' element={<CreatePostCard />} />
        

        <Route path='/register/google' element={<RegisterGooglePage />} />
        <Route path='/register/native' element={<RegisterQweeckPage />} />
        <Route path='/register/native/verification' element={<VerificationPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <ControlBar />
    </div>
  );
}

export default App;

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainPage from './pages/mainPage';
import AboutUs from './pages/aboutUs';
import DoctorList from './pages/doctors/doctorList';
import AnalyzesList from './pages/analyzes/analyzesList';
import GeneticResearchList from './pages/geneticResearch/geneticResearchList';
import IVTherapyesList from './pages/IVTherapyes/IVTherapyesList';
import CheckupList from './pages/checkups/checkupList';
import Footer from './components/ui/footer/footer';
import Header from './components/ui/header/header';
import Contacts from './pages/contacts';
import AppLoader from './components/ui/hoc/appLoader';
import Login from './pages/login';
import LogOut from './components/common/logout';
import UltrasoundsList from './pages/ultrasounds';
import Favourites from './pages/favourites';
import ProtectedRoute from './components/common/protectedRoute';
import User from './pages/user/user';
import CreateCards from './pages/user/createCards';

function App() {

  return (
    <div>
      <AppLoader>
        <Header/>
        <Switch>

          <Route path='/' exact component={MainPage}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/aboutUs' component={AboutUs} />
          <Route path='/analyzes' component={AnalyzesList} />
          <Route path='/IVTherapy/:IVTherapyId?/' component={IVTherapyesList} />
          <Route path='/doctors/:doctorId?/'  component={DoctorList} />
          <Route path='/checkups/:checkupsId?/' component={CheckupList} />
          <Route path='/geneticResearch/:geneticResearchId?/' component={GeneticResearchList} />
          <Route path='/ultrasounds/:ultrasoundId?/' component={UltrasoundsList} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/favourites' component={Favourites} />
          <Route path='/user/:userId?/:edit?' component={User}/>
          <Route path='/logout' component={LogOut}/>
          <ProtectedRoute path='/createCard' component={CreateCards}/>
          <Redirect to='/'/>
          <ProtectedRoute
            path="/user/:userId?/:edit?"
            component={User}
          />
          {/*<ProtectedRoute*/}
          {/*  path="/user/:userId?/createCard"*/}
          {/*  component={CreateCards}*/}
          {/*/>*/}
        </Switch>
        <Footer/>
      </AppLoader>
    </div>
  );
}

export default App;

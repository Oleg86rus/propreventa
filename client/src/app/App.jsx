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

function App() {
  return (
    <div className='container m-auto'>
      <AppLoader>
        <Header/>
        <Switch>
          <Route path='/' exact component={MainPage}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/aboutUs' component={AboutUs} />
          <Route path='/analyzes' component={AnalyzesList} />
          <Route path='/doctors/:doctorId?/' component={DoctorList} />
          <Route path='/checkups/:checkupsId?/' component={CheckupList} />
          <Route path='/geneticResearch/:geneticResearchId?/' component={GeneticResearchList} />
          <Route path='/IVTherapy/:IVTherapyId?/' component={IVTherapyesList} />
          <Route path='/contacts' component={Contacts} />
          <Redirect to='/'/>
        </Switch>
        <Footer/>
      </AppLoader>
    </div>
  );
}

export default App;

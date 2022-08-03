import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/mainPage';
import AboutUs from './pages/aboutUs';
import Doctors from './pages/doctors';
import Analyzes from './pages/analizes';
import GeneticResearch from './pages/geneticResearch';
import IVTherapy from './pages/IVTherapy';
import Checkups from './pages/checkups';
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
          <Route path='/analyzes' component={Analyzes} />
          <Route path='/doctors' component={Doctors} />
          <Route path='/checkups' component={Checkups} />
          <Route path='/geneticResearch' component={GeneticResearch} />
          <Route path='/IVTherapy' component={IVTherapy} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
        <Footer/>
      </AppLoader>
    </div>
  );
}

export default App;

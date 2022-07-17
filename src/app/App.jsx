import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/mainPage';
import aboutUs from './pages/aboutUs';
import doctors from './pages/doctors';
import analyzes from './pages/analizes';
import geneticResearch from './pages/geneticResearch';
import ivTherapy from './pages/ivTherapy';
import checkups from './pages/checkups';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/about_us' component={aboutUs} />
        <Route path='/analyzes' component={analyzes} />
        <Route path='/doctors' component={doctors} />
        <Route path='/checkups' component={checkups} />
        <Route path='/genetic_research' component={geneticResearch} />
        <Route path='/iv_therapy' component={ivTherapy} />
      </Switch>
    </div>
  );
}

export default App;

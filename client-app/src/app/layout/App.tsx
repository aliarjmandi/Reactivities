import { Container } from 'semantic-ui-react';
import Navbar from './Navbar';
import ActivityDashboard from '../../feature/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import HomePage from '../../feature/activities/home/homePage';
import ActivityForm from '../../feature/activities/form/ActivityForm';
import ActivityDetails from '../../feature/activities/details/ActivityDetails';

function App() {

  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: '7em' }}>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/activities' component={ActivityDashboard} />
        <Route path='/activities/:id' component={ActivityDetails} />
        <Route path={['/createActivity','/image/:id']} component={ActivityForm} />
        
      </Container>
    </div>
  );
}

export default observer(App);

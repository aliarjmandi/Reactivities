import { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from './Navbar';
import ActivityDashboard from '../../feature/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { activityStore } = useStore();

   useEffect(() => {
    activityStore.loadActivites();
  }, [activityStore]) //only run one time


  if (activityStore.loadingInitial) return <LoadingComponent content='Loading application...' />

  return (
    <div>
      <Navbar/>
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard/>
      </Container>
    </div>
  );
}

export default observer(App);

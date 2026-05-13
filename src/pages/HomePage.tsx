import { appName } from 'config/constants';
import HomeContainer from 'containers/HomeContainer';

const HomePage: FunctionComponent = () => (
  <main className="home">
    <h1>{appName}</h1>
    <p>Hello World.</p>
    <HomeContainer />
  </main>
);

export default HomePage;

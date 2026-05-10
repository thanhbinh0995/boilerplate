import { appName } from 'config/constants';
import HomeContainer from 'containers/HomeContainer';

export function HomePage() {
  return (
    <main className="home">
      <h1>{appName}</h1>
      <p>Hello World.</p>
      <HomeContainer />
    </main>
  );
}

import { appName } from 'config/constants';

export function HomePage() {
  return (
    <main className="home">
      <h1>{appName}</h1>
      <p>Hello World.</p>
    </main>
  );
}

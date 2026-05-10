import { createRoot } from 'react-dom/client';
import { App } from 'components/App/App';
import 'styles/global.css';

const container = document.getElementById('app');

if (!container) {
  throw new Error('Root element #app not found');
}

const root = createRoot(container);

root.render(<App />);

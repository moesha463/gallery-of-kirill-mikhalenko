import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025 Kirill Mikhalenko</p>
      </footer>
    </div>
  );
}

export default App;
import logo from './innerbliss_main_image.jpeg';
import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SocialIcon bgColor="#831C78" network="instagram" url="https://www.instagram.com/innerbliss.co" />
      </header>
    </div>
  );
}

export default App;

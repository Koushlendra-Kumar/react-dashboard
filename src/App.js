import { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import MenuIcon from "./assets/icons/menu.png"
import UserAvatar from "./assets/icons/user.png"
import Main from './Components/Main';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className="App">
      <header>
        <div className='menu-button' onClick={toggleSidebar}>
          <img src={MenuIcon} className='icon' alt='Menu'/>
        </div>
        <div className='user-avatar'>
          <img src={UserAvatar} className='icon' alt='User Avatar'/>
        </div>
      </header>
      {showSidebar ? <Sidebar /> : null}
      <Main/>
    </div>
  );
}

export default App;

import './App.css';
import Home from "./Assets/Home.svg"

function App() {
  return (
    <div className="App">
      <div id='SidePanel'>
        <div className='NavBar'>
          <div className='SideTop'>
            <div className='NavElement'>
              <div className='DropdownMenu'>
                <span>. . .</span>
              </div>  
            </div>     
            <div className='NavElement'>
              <img src={Home} alt="Home"></img>
              <span>Home</span>
            </div>
            <div className='NavElement'>
              <img src={Home} alt="Search"></img>
              <span>Search</span>
            </div>
            <div className='NavElement'>
              <img src={Home} alt="Your Library"></img>
              <span>Your Library</span>
            </div>
          </div>
          <div className='SideTop'>
            <div className='NavElement'>
              <img src={Home} alt="Home"></img>
              <span>Create Playlist</span>
            </div>
            <div className='NavElement'>
              <img src={Home} alt="Home"></img>
              <span>Liked Songs</span>
            </div>
          </div>
        </div>
        <div className='Border'></div>
        <div className='UserPlaylist'>
          <span>Discover Weekly</span>
          <span>Gym Playlist </span>
          <span>Driving Playlist</span>
          <span>90's Playlist</span>
        </div>
      </div>  
    </div>
  );
}

export default App;

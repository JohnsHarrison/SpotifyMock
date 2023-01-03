import './App.css';
import Home from "./Assets/Home.svg"
import { useState,useEffect, useRef } from 'react';
import { GetRandomUsers } from './API/RandomUser';
import { GetMusic } from './API/GetMusic';

function App() {
  const [Users,setUsers] = useState()
  const [Music,setMusic] = useState()
  const displayed = useRef(true)

  useEffect(()=>{
    if(displayed.current){
      displayed.current = false
      displayUsers()
      getTimes()
      displayMusic()
    }
       
  },[])


  // create and order an array of times 
  function getTimes(){
  let array=[]
  for(let i = 0 ; i < 5 ; i++){
    let number =(Math.floor(Math.random() * (24 - 1) + 1) * i + 1) 
     array.push(number)
  }
  array =  array.sort((a,b)=>{return a-b})
  const mappedArray = array.map((number)=>{
      if(number < 24){
          return `${number} hr`
      }else{
          number = Math.floor(number / 24)
          return `${number} d`
      }
  })
  return mappedArray
}  

const times = getTimes()

function ranNums(){
  let array=[]
  for(let i = 0;i < 5; i++){
    array.push(Math.floor(Math.random() * 50))
  }
  return array
}
const nums = ranNums()
      

async function displayUsers(){
  const results = await (await GetRandomUsers()).data.results
    setUsers(results)
}

async function displayMusic(){
  const results = await (await GetMusic()).data.tracks
  setMusic(results)
}

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
      <div id='FriendActivity'>
        <div className='FriendHeader'>
            <span>Friend Activity</span>
            <img src={Home} alt="Add"></img>
        </div>
        {/* {Users} */}
        {
          Users && Music ? (
          <div className='FriendList'>
            <div className='FriendContainer'>
                  <img src={Users[1].picture.thumbnail} alt='Friend'/>
                  <div className='FriendInfo'>
                      <div className='Friend'>
                        <span className="FriendName">{Users[1].name.first} {Users[1].name.last}</span>
                        <span>{times[0]}</span>    
                      </div>
                      <div className='SongContainer'>
                        <span className='MusicEllipsis'>{Music[nums[0]].name}</span>
                        <span style={{fontWeight:"900", margin:"0px 5px 5px"}}>.</span>
                        <span className='MusicEllipsis'>{Music[nums[0]].artistName}</span>
                      </div>
                      <span>{Music[nums[0]].albumName}</span>
                  </div>
              </div>
              <div className='FriendContainer'>
                  <img src={Users[2].picture.thumbnail} alt='Friend'/>
                  <div className='FriendInfo'>
                      <div className='Friend'>
                        <span className="FriendName">{Users[2].name.first} {Users[2].name.last}</span>
                        <span>{times[1]}</span>    
                      </div>
                      <div className='SongContainer'>
                        <span className='MusicEllipsis'>{Music[nums[1]].name}</span>
                        <span style={{fontWeight:"900", margin:"0px 5px 5px"}}>.</span>
                        <span className='MusicEllipsis'>{Music[nums[1]].artistName}</span>
                      </div>
                      <span>{Music[nums[1]].albumName}</span>
                  </div>
              </div>
              <div className='FriendContainer'>
                  <img src={Users[3].picture.thumbnail} alt='Friend'/>
                  <div className='FriendInfo'>
                      <div className='Friend'>
                        <span className="FriendName">{Users[3].name.first} {Users[3].name.last}</span>
                        <span>{times[2]}</span>    
                      </div>
                      <div className='SongContainer'>
                        <span className='MusicEllipsis'>{Music[nums[2]].name}</span>
                        <span style={{fontWeight:"900", margin:"0px 5px 5px"}}>.</span>
                        <span className='MusicEllipsis'>{Music[nums[2]].artistName}</span>
                      </div>
                      <span>{Music[nums[2]].albumName}</span>
                  </div>
              </div>
              <div className='FriendContainer'>
                  <img src={Users[4].picture.thumbnail} alt='Friend'/>
                  <div className='FriendInfo'>
                      <div className='Friend'>
                        <span className="FriendName">{Users[4].name.first} {Users[4].name.last}</span>
                        <span>{times[3]}</span>    
                      </div>
                      <div className='SongContainer'>
                        <span className='MusicEllipsis'>{Music[nums[3]].name}</span>
                        <span style={{fontWeight:"900", margin:"0px 5px 5px"}}>.</span>
                        <span className='MusicEllipsis'>{Music[nums[3]].artistName}</span>
                      </div>
                      <span>{Music[nums[3]].albumName}</span>
                  </div>
              </div>
              <div className='FriendContainer'>
                  <img src={Users[5].picture.thumbnail} alt='Friend'/>
                  <div className='FriendInfo'>
                      <div className='Friend'>
                        <span className="FriendName">{Users[5].name.first} {Users[5].name.last}</span>
                        <span>{times[4]}</span>    
                      </div>
                      <div className='SongContainer'>
                        <span className='MusicEllipsis'>{Music[nums[4]].name}</span>
                        <span style={{fontWeight:"900", margin:"0px 5px 5px"}}>.</span>
                        <span className='MusicEllipsis'>{Music[nums[4]].artistName}</span>
                      </div>
                      <span>{Music[nums[4]].albumName}</span>
                  </div>
              </div>

          </div>  
          ) : null
        }
        
      </div>
    </div>
  );
}

export default App;
